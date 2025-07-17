import { useState, useEffect, useRef } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your wellness assistant 🤖", sender: "ai" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // Simulate bot typing with delay
    setTimeout(() => {
      const reply = getMockResponse(input);
      setMessages((prev) => [...prev, { text: reply, sender: "ai" }]);
      setLoading(false);
    }, 1000);
  };

  const getMockResponse = (msg) => {
    msg = msg.toLowerCase();
    if (msg.includes("sad")) return "It's okay to feel sad. Want to talk about it?";
    if (msg.includes("happy")) return "Yay! I'm happy for you 😊";
    if (msg.includes("stress") || msg.includes("anxiety"))
      return "Try taking deep breaths. You're doing great 🌈";
    return "I'm listening. Tell me more...";
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] text-white p-6 sm:p-10">
      <h1 className="text-4xl font-extrabold text-[#eebbc3] mb-8 text-center">
        💬 AI Wellness Chat
      </h1>

      {/* Message Box */}
      <div className="flex-1 overflow-y-auto max-h-[70vh] rounded-3xl shadow-lg p-5 sm:p-6 bg-white/10 backdrop-blur-lg border border-white/10 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`w-fit max-w-[80%] px-4 py-3 rounded-lg text-sm sm:text-base shadow ${
              msg.sender === "user"
                ? "bg-[#eebbc3] text-[#232946] ml-auto rounded-br-none"
                : "bg-[#232946] text-[#eebbc3] mr-auto rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="text-[#eebbc3] bg-[#232946] px-4 py-2 rounded-lg shadow animate-pulse w-fit">
            Typing...
          </div>
        )}

        {/* Auto-scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="flex items-center mt-6 gap-4">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-3 text-white bg-[#232946]/80 border border-[#eebbc3]/30 rounded-full focus:outline-none focus:ring-2 focus:ring-[#eebbc3] shadow"
        />

        <button
          onClick={handleSend}
          className="px-6 py-3 font-bold rounded-full shadow-lg text-[#232946] bg-gradient-to-r from-[#eebbc3] to-[#ffd6e0] hover:from-[#ffd6e0] hover:to-[#eebbc3] transition hover:scale-105 active:scale-95"
        >
          Send
        </button>
      </div>
    </div>
  );
}
