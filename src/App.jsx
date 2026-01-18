import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMsg = {
      id: Date.now(),
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString('it-IT')
    }

    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    // Mock AI response - sostituisci con webhook n8n
    setTimeout(() => {
      const aiMsg = {
        id: Date.now() + 1,
        role: 'assistant',
        content: `Echo: ${userMsg.content}`,
        timestamp: new Date().toLocaleTimeString('it-IT')
      }
      setMessages(prev => [...prev, aiMsg])
      setLoading(false)
    }, 800)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>💬 Chat AI Test</h1>
        <p>Minimal test interface</p>
      </header>

      <div className="messages">
        {messages.length === 0 ? (
          <div className="empty">👋 Inizia a chattare</div>
        ) : (
          messages.map(msg => (
            <div key={msg.id} className={`message ${msg.role}`}>
              <div className="bubble">
                <p>{msg.content}</p>
                <span className="time">{msg.timestamp}</span>
              </div>
            </div>
          ))
        )}
        {loading && (
          <div className="message assistant">
            <div className="bubble loading">
              <span>•</span><span>•</span><span>•</span>
            </div>
          </div>
        )}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleSend()}
          placeholder="Scrivi un messaggio..."
          disabled={loading}
        />
        <button onClick={handleSend} disabled={loading || !input.trim()}>
          Invia
        </button>
      </div>
    </div>
  )
}

export default App