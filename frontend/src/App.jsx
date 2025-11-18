import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [status, setStatus] = useState("")

  // Connection to your Python Backend
  const API = "http://127.0.0.1:8000"

  // 1. MEMORIZE FUNCTION
  const handleSave = async () => {
    if(!input) return;
    setStatus("Thinking...")
    try {
      await axios.post(`${API}/memorize`, { text: input })
      setStatus("Saved to Brain! 🧠")
      setInput("")
    } catch (err) {
      console.error(err)
      setStatus("Error: Is the Backend running?")
    }
  }

  // 2. RECALL FUNCTION
  const handleSearch = async () => {
    setStatus("Searching...")
    try {
      const res = await axios.get(`${API}/recall?query=${query}`)
      setResults(res.data)
      setStatus(`Found ${res.data.length} memories.`)
    } catch (err) {
      setStatus("Error connecting to Brain.")
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', fontFamily: 'Arial' }}>
      <h1>🧠 Personal Cortex</h1>
      
      {/* Status Bar */}
      {status && <p style={{background: '#eee', padding: '10px', borderRadius: '5px'}}>{status}</p>}

      {/* Input Area */}
      <div style={{ marginBottom: '40px', border: '1px solid #444', padding: '20px', borderRadius: '10px' }}>
        <h3>📝 Feed the Brain</h3>
        <input 
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type something to remember..."
        />
        <button onClick={handleSave}>Memorize</button>
      </div>

      {/* Search Area */}
      <div style={{ border: '1px solid #444', padding: '20px', borderRadius: '10px' }}>
        <h3>🔎 Ask the Brain</h3>
        <input 
          style={{ width: '70%', padding: '10px', marginRight: '10px' }}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="What are you looking for?"
        />
        <button onClick={handleSearch}>Recall</button>
        
        {/* Search Results */}
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          {results.map((r, i) => (
            <div key={i} style={{ background: '#2a2a2a', color: 'white', padding: '10px', marginBottom: '5px', borderRadius: '5px' }}>
              {r}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App