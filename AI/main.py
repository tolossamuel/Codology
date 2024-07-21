from fastapi import FastAPI, File, UploadFile, HTTPException
from pydantic import BaseModel
import cohere
import pdfplumber
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import os

load_dotenv()

COHERE_API_KEY = os.getenv("COHERE_API_KEY")


if not COHERE_API_KEY:
    raise RuntimeError("COHERE_API_KEY not set in .env file")

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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

    response = co.chat(
    message= message.text
    )
    return {"response": response.text}

@app.post("/generate_quiz")
async def generate_quiz(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Invalid file type. Only PDF files are allowed.")

    # Extract text from the PDF
    try:
        with pdfplumber.open(file.file) as pdf:
            text = ""
            for page in pdf.pages:
                text += page.extract_text()
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to process PDF file.")

    # Print the extracted text for debugging purposes
    

    # Use Cohere to generate a response from the extracted text
    try:
        response = co.chat(
            message=f"Generate 3 quiz multiple choose questions with answer of the question from the following text:\n\n{text} and dont start with other thing direct to qestion dont say here is"
        )
        ans = responds(response.text)
        return {"response": ans}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Cohere API Error: {str(e)}")
@app.post("/tutorial")
async def tutorial(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Invalid file type. Only PDF files are allowed.")

    # Extract text from the PDF
    try:
        with pdfplumber.open(file.file) as pdf:
            text = ""
            for page in pdf.pages:
                text += page.extract_text()
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to process PDF file.")

    # Print the extracted text for debugging purposes
    

    # Use Cohere to generate a response from the extracted text
    try:
        response = co.chat(
            message=f"summerize the text and create tutorial for student text:\n\n{text} and dont start with other thing direct to summerize dont say here is"
        )
        return {"response": response.text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Cohere API Error: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
def responds(text):
   
    lines = text.split("\n")
    ans = []
    template = {}
    counter = 0
    arr = ["A", "B", "C", "D", "ans"]

    for line in lines:
        if line.strip() == "":
            continue
        if line[0].isdigit():
            if template:
                ans.append(template.copy())
                template = {}
            template["q"] = line.strip()
            counter = 0
            
        else:
            if counter < len(arr):
                if arr[counter] == "ans":
                    value = line.strip().split(" ")
                  
                    template[arr[counter]] = value[1][0]
                    
                else:
                    template[arr[counter]] = line.strip()
                counter += 1
    if template:
        ans.append(template)
    
    return ans


