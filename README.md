# 💬 Chat AI Test - Replit Deploy

Progetto test per workflow automatico **GitHub MCP → Replit**.

---

## 🚀 Deploy su Replit (2 minuti)

### Metodo 1: Import URL diretto

Apri questo link (sostituisci `<your-repl>` con nome che preferisci):

```
https://replit.com/new/github/consulentAI/chat-test-replit
```

### Metodo 2: Import manuale

1. Vai su [replit.com](https://replit.com)
2. Click **"Create Repl"** → **"Import from GitHub"**
3. Incolla: `https://github.com/consulentAI/chat-test-replit`
4. Click **"Import from GitHub"**

Replit auto-configura tutto (Node.js, dipendenze, port).

---

## 🎯 Features

- ✅ Chat interface responsive
- ✅ Typing indicator animato
- ✅ Timestamp sui messaggi
- ✅ Gradient design (viola/blu)
- ✅ Mock backend (sostituisci con n8n webhook)

---

## 🔗 Integrazione webhook n8n

In `src/App.jsx`, sostituisci il `setTimeout` con:

\`\`\`javascript
const response = await fetch('TUO_WEBHOOK_N8N_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: input })
})
const data = await response.json()
const aiMsg = {
  id: Date.now() + 1,
  role: 'assistant',
  content: data.reply,
  timestamp: new Date().toLocaleTimeString('it-IT')
}
\`\`\`

---

## 📦 Stack

- **React 18** - UI framework
- **Vite** - Build tool veloce
- **CSS vanilla** - No framework styling
- **Mock backend** - Sostituisci con n8n

---

## 💻 Sviluppo locale (opzionale)

\`\`\`bash
npm install
npm run dev
\`\`\`

Apri http://localhost:5173

---

**✨ Creato automaticamente da Claude Desktop + GitHub MCP**  
**⚡ Workflow: consulentAI → GitHub → Replit**