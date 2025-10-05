from pydantic import BaseModel
from typing import List, Any

class LLMQuery(BaseModel):
    prompt: str
    max_tokens: int = 256
    temperature: float = 0.2

class QueryResponse(BaseModel):
    generated_text: str
    found_articles: List[Any]
    status: str

query_response_docs = {
    200: {
        "description": "Successful Gemini LLM response",
        "content": {
            "application/json": {
                "example": {
                    "generated_text": "Microgravity significantly alters stem cell behavior...",
                    "found_articles": [
                        "Stem Cell Health and Tissue Regeneration in Microgravity (https://example.com/pmc12345)",
                        "Microgravity Reduces Differentiation and Regenerative Potential (https://example.com/pmc67890)"
                    ],
                    "status": "success"
                }
            }
        }
    },
    500: {
        "description": "Error from Gemini API.",
        "content": {
            "application/json": {
                "example": {
                    "detail": "Error interacting with Google Gemini API: <error message here>"
                }
            }
        }
    }
}
