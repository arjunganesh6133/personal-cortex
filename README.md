# 🧠 Personal Cortex: An AI-Powered Memory Retrieval System
THE PROBLEM
Our digital lives are mess.We have notes in apple notes,bookmarks in chrome,files in Google drive,conversations in slack,and to do list in Notion.You can never find the one you're looking for.

The App Idea:A single,unified "AI Search" that runs locally on your machine,connects to all your apps,and acts as your personal "Second brain".

This is a full-stack application designed to store user text data (memories) and retrieve relevant information using **semantic search** powered by Vector Embeddings (ChromaDB). This acts as a private, external "brain" for storing and retrieving facts based on context and meaning, not just exact keywords.

---

## ⚙️ Technologies Used

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Backend (Brain)** | **Python 3, FastAPI** | Creates the fast, asynchronous API endpoints (`/memorize`, `/recall`). |
| | **ChromaDB** | The Vector Store used for creating and querying memories. |
| **Frontend (Face)** | **React (Vite)** | Modern, responsive user interface for interaction. |
| | **Axios** | HTTP client to handle communication between the frontend (port 5173) and backend (port 8000). |

---

## 💡 How to Use the App (Running Locally)

This application requires two separate terminals to run the Frontend and Backend simultaneously.

### 1. Run the Backend Server (The Brain)

This starts the Python API and the memory engine.

* In Terminal 1 (within the `backend` folder):
    ```bash
    .\venv\Scripts\activate
    uvicorn app.main:app --reload
    ```

### 2. Run the Frontend Server (The Face)

This serves the web interface.

* In Terminal 2 (within the `frontend` folder):
    ```bash
    npm run dev
    ```
    *Open your browser to the URL shown (e.g., `http://localhost:5173`).*

### 3. Usage

1.  **Memorize Data:** Use the **"Feed the Brain"** section to type a note or fact. Click **Memorize**. This converts the text into a numerical vector and saves it to the database.
2.  **Recall Data:** Use the **"Ask the Brain"** section to ask a question related to the stored facts. Click **Recall**. The system searches the vectors to find the most contextually relevant memory.

---

## 🌐 Project Status and Deployment

This repository is set up with a `.gitignore` file to correctly ignore large, temporary, or sensitive directories (`venv/`, `node_modules/`, `db_data/`).

To push future changes to this repository, ensure your terminal is in the project root (`personal cortex`) and use the standard commands:

```bash
git add .
git commit -m "Describe your changes here"
git push
