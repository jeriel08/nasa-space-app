from typing import Union
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from google import genai
from google.genai import types

app = FastAPI()

class LLMQuery(BaseModel):
    prompt: str
    max_tokens: int = 50
    temperature: float = 1.0


@app.post("/llm/query")
async def query_llm(llm_query: LLMQuery):
    """
    Interact with Gemini 2.5 Flash via google-genai SDK using the GEMINI_API_KEY from the environment.
    """
    try:
        client = genai.Client()
        config = types.GenerateContentConfig(
            max_output_tokens=llm_query.max_tokens,
            temperature=llm_query.temperature,
        )
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=llm_query.prompt,
            config=config,
        )
        return {"generated_text": response.text, "status": "success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error interacting with Google Gemini API: {e}")

