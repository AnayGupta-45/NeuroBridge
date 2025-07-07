import { useState } from "react";

export default function AddMood() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood) {
      setMessage("Please select a mood.");
      return;
    }
    console.log("Mood:", mood, "Note:", note);
    setMessage("Mood added successfully!");
    setMood("");
    setNote("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 px-10 py-12 max-w-md w-full">
        <h2 className="text-3xl font-extrabold mb-6 text-[#eebbc3]">Track Your Mood</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <select value={mood} onChange={(e) => setMood(e.target.value)}
            className="p-3 rounded bg-[#232946]/80 text-white border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3]">
            <option value="">Select Mood</option>
            <option value="Happy">😊 Happy</option>
            <option value="Sad">😔 Sad</option>
            <option value="Anxious">😟 Anxious</option>
            <option value="Excited">🤩 Excited</option>
            <option value="Angry">😡 Angry</option>
          </select>

          <textarea
            placeholder="Add a note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="p-3 rounded bg-[#232946]/80 text-white placeholder-gray-400 border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition"
          ></textarea>

          <button type="submit"
            className="bg-[#eebbc3] text-[#232946] p-3 rounded-full font-bold shadow-md hover:bg-[#ffd6e0] transition">
            Add Mood
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-[#eebbc3]">{message}</p>}
      </div>
    </div>
  );
}
