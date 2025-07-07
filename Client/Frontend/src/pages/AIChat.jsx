import { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);

    setTimeout(() => {
      setMessages([...newMessages, { text: "I'm here to support you!", sender: "ai" }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] text-white p-10">
      <h1 className="text-4xl font-extrabold text-[#eebbc3] mb-8">AI Chat</h1>

      <div className="flex-1 overflow-y-auto mb-6 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/10 space-y-4 max-h-[70vh]">
        {messages.map((msg, index) => (
          <div key={index} className={`p-3 rounded ${msg.sender === "user" ? "bg-[#eebbc3] text-[#232946] self-end" : "bg-[#232946] text-[#eebbc3] self-start"} w-fit max-w-xs`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 rounded bg-[#232946]/80 text-white border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3]"
        />
        <button onClick={handleSend}
          className="bg-[#eebbc3] text-[#232946] px-6 py-2 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">
          Send
        </button>
      </div>
    </div>
  );
}
