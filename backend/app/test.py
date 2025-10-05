import os

print("CWD:", os.getcwd())
print("Here:", os.path.dirname(os.path.abspath(__file__)))
print("Looking for:", os.path.join(os.path.dirname(os.path.abspath(__file__)), "app", "SB_publication_PMC.csv"))
print("Exists?", os.path.exists(os.path.join(os.path.dirname(os.path.abspath(__file__)), "SB_publication_PMC.csv")))
