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

