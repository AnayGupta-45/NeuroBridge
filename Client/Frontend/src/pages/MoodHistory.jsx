import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const moodEmojis = {
  Happy: "😊",
  Sad: "😔",
  Anxious: "😟",
  Excited: "🤩",
  Angry: "😡",
  Relaxed: "😌",
  Surprised: "😮",
  Tired: "🥱",
  Confused: "😕",
  Loved: "😍",
  Silly: "🤪",
  Motivated: "💪",
  Bored: "😐",
  Grateful: "🙏",
  Proud: "😎",
};

export default function MoodHistory() {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMoods();
  }, []);

  const fetchMoods = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/mood", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setMoods(data);
        setLoading(false);
      });
  };

  const handleRemove = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/mood/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        toast.success("Mood entry deleted! 💨");
        fetchMoods();
      } else {
        toast.error("Failed to delete mood!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  const handleClearHistory = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:5000/api/mood/clear", {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        toast.info("Mood history cleared 🧹");
        fetchMoods();
      } else {
        toast.error("Failed to clear history.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] text-white px-8 py-10 relative overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-pink-300/20 blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#eebbc3]/30 blur-2xl animate-pulse -z-10"></div>

      <h2 className="text-4xl font-extrabold text-[#eebbc3] text-center mb-6 drop-shadow-lg">
        📊 Mood History
      </h2>

      {/* Clear History Button */}
      <div className="flex justify-end max-w-3xl mx-auto mb-4">
        {moods.length > 0 && (
          <button
            onClick={handleClearHistory}
            className="px-4 py-2 font-bold rounded-full shadow bg-[#eebbc3] text-[#232946] hover:bg-[#ffd6e0] transition"
          >
            Clear History
          </button>
        )}
      </div>

      {/* Mood List */}
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : moods.length === 0 ? (
        <p className="text-center text-lg text-[#eebbc3]/80">
          No moods logged yet. Start tracking!
        </p>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          {moods.map((entry, i) => (
            <div
              key={entry._id || i}
              className="flex items-center gap-4 p-6 rounded-xl border border-white/10 bg-white/10 hover:bg-white/20 transition shadow-lg group"
            >
              {/* Emoji Icon */}
              <div className="flex items-center justify-center w-16 h-16 text-4xl rounded-full border-2 bg-[#232946]/70 border-[#eebbc3]/30 animate-pulse flex-shrink-0">
                {moodEmojis[entry.mood] || "🎭"}
              </div>

              {/* Mood Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-2xl font-bold text-[#eebbc3]">
                    {moodEmojis[entry.mood] || "🎭"} {entry.mood}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(entry.timestamp).toLocaleString()}
                  </span>
                </div>
                {entry.note && (
                  <p className="mt-2 italic text-gray-300">{entry.note}</p>
                )}
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemove(entry._id)}
                title="Remove"
                className="px-3 py-1 text-sm font-bold rounded-full shadow bg-[#eebbc3] text-[#232946] hover:bg-[#ffd6e0] transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
