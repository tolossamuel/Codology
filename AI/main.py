from fastapi import FastAPI, Depends, HTTPException, Header
from pydantic import BaseModel
import cohere
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import os

load_dotenv()

COHERE_API_KEY = os.getenv("COHERE_API_KEY")


if not COHERE_API_KEY:
    raise RuntimeError("COHERE_API_KEY not set in .env file")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

# Initialize the Cohere client with the API key
co = cohere.Client(COHERE_API_KEY)
# Dependency to check for API key
def api_key_dependency(x_api_key: str = Header(...)):
    if x_api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API Key")
    return x_api_key

# Define a simple model
class ChatMessage(BaseModel):
    text: str

@app.post("/chat")
def chat(message: ChatMessage):
    # Here, you can process the message.text and generate a response
    # For demonstration purposes, we'll echo the input text
    response = co.chat(
    message= message.text
    )
    return {"response": response.text}

# Run the server with Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

