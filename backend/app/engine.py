# backend/app/engine.py
import os
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings

# 1. Define where the memory lives. 
# We go UP two levels (../../) to get out of 'app' and 'backend' to find 'local_data'
DB_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "local_data", "chromadb")

# 2. Load the Model
# "all-MiniLM-L6-v2" is the industry standard for lightweight local CPU search.
# It's small (80MB) and fast.
print("Loading AI Model... (This happens only once per startup)")
embedding_func = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

def get_db():
    # This connects to the folder on your disk.
    return Chroma(persist_directory=DB_PATH, embedding_function=embedding_func)