import React, { useState } from "react";

const FloatingAIChat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": apiKey
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: `You are a friendly and helpful human assistant for Msafir Express. Respond in a natural, conversational way, as if you are talking to a real person. Only answer questions about Msafir Express, its services, and related information. If asked about anything else, politely refuse. Always respond in the same language as the user's question, and do not mix languages in your reply. When asked about shipping costs, explain that the cost is determined by thamani ya bidhaa (the value of the goods). For contact, always use the phone number 0683859574 and email msafiri@gmail.com in your responses.\n${input}` }
                ]
              }
            ]
          })
        }
      );
      const data = await response.json();
      console.log("Gemini API response:", data); // Debug log
      let aiMessage = "No response.";
      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        aiMessage = data.candidates[0].content.parts[0].text;
      } else if (data?.error?.message) {
        aiMessage = `Error: ${data.error.message}`;
      }
      setMessages([...messages, { role: "user", content: input }, { role: "ai", content: aiMessage }]);
    } catch (e) {
      setMessages([...messages, { role: "user", content: input }, { role: "ai", content: `Error connecting to AI: ${e instanceof Error ? e.message : String(e)}` }]);
    }
    setInput("");
    setLoading(false);
  };

  return (
    <>
      <button
        className="floating-btn aichat"
        aria-label="Chat with AI"
        onClick={() => setOpen(true)}
      >
        🤖
      </button>
      {open && (
        <div style={{
          position: "fixed",
          bottom: "90px",
          right: "24px",
          width: "350px",
          maxHeight: "500px",
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
          zIndex: 1001,
          display: "flex",
          flexDirection: "column"
        }}>
          <div style={{ padding: "16px", borderBottom: "1px solid #eee", fontWeight: "bold" }}>
            Gemini AI Chat
            <button style={{ float: "right", background: "none", border: "none", fontSize: "18px", cursor: "pointer" }} onClick={() => setOpen(false)}>×</button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ marginBottom: "12px", textAlign: msg.role === "user" ? "right" : "left" }}>
                <span style={{ background: msg.role === "user" ? "#e3f2fd" : "#f1f8e9", padding: "8px 12px", borderRadius: "8px", display: "inline-block" }}>
                  {msg.content}
                </span>
              </div>
            ))}
            {loading && <div>AI is typing...</div>}
          </div>
          <div style={{ padding: "12px", borderTop: "1px solid #eee", display: "flex" }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              style={{ flex: 1, padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }}
              placeholder="Type your message..."
              disabled={loading}
              onKeyDown={e => { if (e.key === "Enter") handleSend(); }}
            />
            <button
              onClick={handleSend}
              disabled={loading}
              style={{ marginLeft: "8px", padding: "8px 16px", borderRadius: "8px", background: "#4285F4", color: "white", border: "none" }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAIChat;
