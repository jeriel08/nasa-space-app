import os
import sys
import uvicorn

def check_env_vars():
    if not os.getenv("GEMINI_API_KEY"):
        print("ERROR: GEMINI_API_KEY environment variable is missing.", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    check_env_vars()
    uvicorn.run("app.api:app", host="127.0.0.1", port=8000, reload=True)
