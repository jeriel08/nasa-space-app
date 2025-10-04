from ast import parse
import csv

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
        with open(file_path, mode='r', encoding='utf-8') as csv_file:
            reader = csv.DictReader(csv_file, delimiter=delimiter)
            if reader.fieldnames is None:
                raise ValueError("CSV file is missing headers.")
            return [row for row in reader]
    except FileNotFoundError:
        raise FileNotFoundError(f"The file {file_path} does not exist.")
    except Exception as e:
        raise ValueError(f"An error occurred while parsing the CSV file: {e}")

# if __name__ == "__main__":
#     print(parse_csv("SB_publication_PMC.csv"))
