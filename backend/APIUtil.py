import csv
import re
import difflib

def parse_csv(file_path, delimiter=','):
    """
    Parse a CSV file and return its content as a list of dictionaries.

    :param file_path: Path to the CSV file.
    :param delimiter: Delimiter used in the CSV file. Default is ','.
    :return: List of dictionaries representing the CSV rows.
    :raises FileNotFoundError: If the file does not exist.
    :raises ValueError: If the file is not a valid CSV.
    """
    try:
        with open(file_path, mode='r', encoding='utf-8-sig') as csv_file:
            reader = csv.DictReader(csv_file, delimiter=delimiter)
            if reader.fieldnames is None:
                raise ValueError("CSV file is missing headers.")
            
            # Clean up fieldnames (strip spaces, handle case)
            reader.fieldnames = [name.strip() for name in reader.fieldnames]
            
            rows = []
            for row in reader:
                if not any(row.values()):
                    continue  # skip empty rows
                clean_row = {k.strip(): (v.strip() if v else v) for k, v in row.items() if k}
                rows.append(clean_row)
            
            return rows

    except FileNotFoundError:
        raise FileNotFoundError(f"The file {file_path} does not exist.")
    except Exception as e:
        raise ValueError(f"An error occurred while parsing the CSV file: {e}")

def extract_keywords(prompt: str):
    # Simple word extraction, lowercase, remove short words
    words = re.findall(r'\w+', prompt.lower())
    keywords = [w for w in words if len(w) > 3]
    return keywords

def fuzzy_finder(prompt: str, csv_path: str = "SB_publication_PMC.csv", limit: int = 10, cutoff: float = 0.7):
    papers = parse_csv(csv_path)
    titles = [paper["Title"] for paper in papers]
    prompt_words = set(re.findall(r'\w+', prompt.lower()))

    # First: any title containing at least one prompt word
    matches = []
    for paper in papers:
        title_words = set(re.findall(r'\w+', paper["Title"].lower()))
        if prompt_words & title_words:
            matches.append({"title": paper["Title"], "url": paper["Link"]})
            if len(matches) == limit:
                return matches

    # Fallback: fuzzy match by entire prompt vs titles
    best_titles = difflib.get_close_matches(prompt, titles, n=limit, cutoff=cutoff)
    results = []
    for match in best_titles:
        for paper in papers:
            if paper["Title"] == match:
                results.append({"title": paper["Title"], "url": paper["Link"]})
                break
    return results

def build_system_prompt(user_prompt, articles):
    system = "You are a scientific assistant specializing in the field of space biology. Use the following references if relevant:\n"
    for idx, art in enumerate(articles, 1):
        system += f"{idx}. {art}\n"
    system += f"\nUser prompt: {user_prompt}\n"
    return system

if __name__ == "__main__":
    print(fuzzy_finder("Mice"))

