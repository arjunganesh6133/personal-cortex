from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # <--- IMPORT THIS
from pydantic import BaseModel
from app.engine import get_db

app = FastAPI()

# --- ADD THIS BLOCK HERE ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows any website to talk to this backend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ---------------------------

db = get_db()

class Note(BaseModel):
    text: str

@app.get("/")
def home():
    return {"status": "Brain is Online"}

@app.post("/memorize")
def add_note(note: Note):
    db.add_texts([note.text])
    return {"message": "Stored in memory"}

@app.get("/recall")
def search(query: str):
    results = db.similarity_search(query, k=2)
    return [doc.page_content for doc in results]