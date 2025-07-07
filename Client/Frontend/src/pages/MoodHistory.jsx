import { useState, useEffect } from "react";

export default function MoodHistory() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    setMoods([
      { date: "2025-06-30", mood: "Happy", note: "Had a great day!" },
      { date: "2025-06-29", mood: "Sad", note: "Feeling low today." },
      { date: "2025-06-28", mood: "Excited", note: "Looking forward to tomorrow!" },
    ]);
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] text-white">
      <h1 className="text-4xl font-extrabold text-[#eebbc3] mb-8">Mood History</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moods.map((entry, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
            <div className="text-xl font-bold text-[#eebbc3] mb-2">{entry.mood}</div>
            <div className="text-gray-300 mb-2">{entry.date}</div>
            <div className="text-gray-400 text-sm">{entry.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
