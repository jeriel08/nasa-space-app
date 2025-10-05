import csv
import re
import difflib
import os

abs_csv_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "SB_publication_PMC.csv")

def parse_csv(file_path, delimiter=','):
    try:
        with open(file_path, mode='r', encoding='utf-8-sig') as csv_file:
            reader = csv.DictReader(csv_file, delimiter=delimiter)
            if reader.fieldnames is None:
                raise ValueError("CSV file is missing headers.")

            print(f"CSV Found: {file_path}")
            reader.fieldnames = [name.strip() for name in reader.fieldnames]
            rows = []
            for row in reader:
                if not any(row.values()):
                    continue
                clean_row = {k.strip(): (v.strip() if v else v) for k, v in row.items() if k}
                rows.append(clean_row)
            return rows
    except FileNotFoundError:
        raise FileNotFoundError(f"The file {file_path} does not exist.")
    except Exception as e:
        raise ValueError(f"CSV error: {e}")

def extract_keywords(prompt: str):
    # Lowercase words, filter short/common words, optionally use a stopword list
    words = re.findall(r'\w+', prompt.lower())
    keywords = [w for w in words if len(w) > 3]
    return list(set(keywords))

def keyword_cooccurrence_graph(prompt, csv_path="app/SB_publication_PMC.csv"):
    prompt_keywords = set(extract_keywords(prompt))
    articles = parse_csv(abs_csv_path)
    edges = set()
    for article in articles:
        title_words = set(re.findall(r'\w+', article["Title"].lower()))
        present = prompt_keywords & title_words
        if len(present) > 1:
            for a, b in combinations(sorted(present), 2):
                edges.add(tuple(sorted((a, b))))
    return {
        "nodes": sorted(prompt_keywords),
        "edges": [{"source": a, "target": b} for a, b in edges]
    }

def fuzzy_finder(prompt, csv_path="SB_publication_PMC.csv", limit=20, cutoff=0.7):
    keywords = extract_keywords(prompt)
    papers = parse_csv(abs_csv_path)
    matches = []
    for paper in papers:
        title_words = set(re.findall(r'\w+', paper["Title"].lower()))
        if set(keywords) & title_words:
            matches.append(f'{paper["Title"]} ({paper["Link"]})')
            if len(matches) == limit:
                break
    if matches:
        return matches

    # Fallback: fuzzy match by prompt string vs titles
    titles = [paper["Title"] for paper in papers]
    best_titles = difflib.get_close_matches(prompt, titles, n=limit, cutoff=cutoff)
    results = []
    for match in best_titles:
        for paper in papers:
            if paper["Title"] == match:
                results.append(f'{paper["Title"]} ({paper["Link"]})')
                break
    return results

def build_system_prompt(user_prompt, articles):
    system = (
        "You are a scientific assistant specializing in space biology.\n"
        "Cite each reference you use, by number, e.g., [2]"
        "Given all references, synthesize a response to the user."
        "If multiple references support a statement, cite all that apply. "
        "Focus on accuracy, clarity, and relevance.\n"
        "\nReferences:\n"
    )
    for idx, art in enumerate(articles, 1):
        system += f"{idx}. {art}\n"
    system += f"\nUser prompt: {user_prompt}\n"
    return system
