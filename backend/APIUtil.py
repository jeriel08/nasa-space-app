import csv
import re
import difflib

def parse_csv(file_path, delimiter=','):
    try:
        with open(file_path, mode='r', encoding='utf-8-sig') as csv_file:
            reader = csv.DictReader(csv_file, delimiter=delimiter)
            if reader.fieldnames is None:
                raise ValueError("CSV file is missing headers.")
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
    words = re.findall(r'\w+', prompt.lower())
    return [w for w in words if len(w) > 3]

def fuzzy_finder(prompt, csv_path="SB_publication_PMC.csv", limit=10, cutoff=0.7):
    keywords = extract_keywords(prompt)
    papers = parse_csv(csv_path)
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
    system = "You are a scientific assistant specializing in the field of space biology. Use the following references if relevant:\n"
    for idx, art in enumerate(articles, 1):
        system += f"{idx}. {art}\n"
    system += f"\nUser prompt: {user_prompt}\n"
    return system
