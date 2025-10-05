from typing import Union
from fastapi import FastAPI, HTTPException, APIRouter
from pydantic import BaseModel

from google import genai
from google.genai import types

from app.APIUtil import extract_keywords, fuzzy_finder, build_system_prompt
from .schema import LLMQuery, QueryResponse, query_response_docs

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development; restrict in production!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LLMQuery(BaseModel):
    prompt: str
    max_tokens: int = 1000
    temperature: float = 1.0

class Query(BaseModel):
    prompt: str


@app.post("/query")
async def query_llm(llm_query: LLMQuery) -> QueryResponse:
    """
    Interact with Gemini 2.5 Flash via google-genai SDK using the GEMINI_API_KEY from the environment.
    """
    try:
        found_articles = fuzzy_finder(llm_query.prompt)
        print("DEBUG: found_articles:", found_articles)
        system_prompt = build_system_prompt(llm_query.prompt, found_articles)
        print("DEBUG: system prompt:", system_prompt)
        client = genai.Client()

        grounding_tool = types.Tool(
            google_search=types.GoogleSearch()
        )

        config = types.GenerateContentConfig(
            tools=[grounding_tool],
            max_output_tokens=llm_query.max_tokens,
            temperature=llm_query.temperature,
        )
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=system_prompt,
            config=config,
        )
        return QueryResponse(
            generated_text=response.text,
            found_articles=found_articles,
            status="success"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error interacting with Google Gemini API: {e}")



