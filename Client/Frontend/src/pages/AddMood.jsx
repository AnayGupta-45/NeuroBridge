import { useState } from "react";

// --- Human-written CSS ---
const styles = {
  background: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #1c1f3a 0%, #181c2f 50%, #0f111a 100%)",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    position: "relative",
    overflow: "hidden",
    padding: "40px 0",
  },
  bgCircle1: {
    position: "absolute",
    top: 40,
    left: 40,
    width: 300,
    height: 300,
    background: "rgba(244, 114, 182, 0.2)",
    borderRadius: "50%",
    filter: "blur(120px)",
    animation: "pulse 2s infinite alternate",
    zIndex: 0,
  },
  bgCircle2: {
    position: "absolute",
    bottom: 64,
    right: 40,
    width: 380,
    height: 380,
    background: "rgba(238, 187, 195, 0.2)",
    borderRadius: "50%",
    filter: "blur(160px)",
    animation: "pulse 2s infinite alternate",
    zIndex: 0,
  },
  moodBox: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: 700,
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
    borderRadius: 32,
    boxShadow: "0 0 60px rgba(255,192,203,0.1)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "48px 32px",
    margin: "0 16px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: 800,
    marginBottom: 16,
    color: "#eebbc3",
    textAlign: "center",
    textShadow: "0 2px 8px #23294633",
  },
  subheading: {
    textAlign: "center",
    color: "#eebbc3cc",
    marginBottom: 32,
    fontSize: "1.2rem",
    fontWeight: 500,
  },
  emojiPreview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 32,
  },
  emojiCircle: {
    width: 96,
    height: 96,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(35,41,70,0.7)",
    borderRadius: "50%",
    boxShadow: "0 4px 24px #23294633",
    border: "2px solid #eebbc34d",
    fontSize: "3rem",
    animation: "pulse 2s infinite alternate",
  },
  emojiLabel: {
    marginTop: 16,
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#eebbc3",
    textShadow: "0 2px 8px #23294633",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  select: {
    padding: 16,
    borderRadius: 16,
    background: "rgba(35,41,70,0.8)",
    color: "#fff",
    border: "1px solid #eebbc34d",
    fontSize: "1.1rem",
    fontWeight: 500,
    boxShadow: "0 2px 8px #23294633",
    outline: "none",
    transition: "border 0.2s",
  },
  textarea: {
    padding: 16,
    borderRadius: 16,
    background: "rgba(35,41,70,0.8)",
    color: "#fff",
    border: "1px solid #eebbc34d",
    fontSize: "1.1rem",
    fontWeight: 500,
    boxShadow: "0 2px 8px #23294633",
    outline: "none",
    transition: "border 0.2s",
    resize: "none",
  },
  button: {
    background: "linear-gradient(90deg, #eebbc3 0%, #ffd6e0 100%)",
    color: "#232946",
    padding: 16,
    borderRadius: 999,
    fontWeight: "bold",
    fontSize: "1.1rem",
    boxShadow: "0 4px 16px #eebbc333",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.15s, background 0.2s",
  },
  buttonHover: {
    background: "linear-gradient(90deg, #ffd6e0 0%, #eebbc3 100%)",
    transform: "scale(1.05)",
  },
  message: {
    marginTop: 24,
    textAlign: "center",
    fontSize: "1rem",
    color: "#eebbc3",
    fontWeight: 600,
  },
};

// --- Keyframes for pulse animation ---
const styleSheet = `
@keyframes pulse {
  0% { opacity: 0.8; }
  100% { opacity: 1; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("addmood-pulse-keyframes")) {
  const style = document.createElement("style");
  style.id = "addmood-pulse-keyframes";
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}

const moodOptions = [
  { value: "Happy", label: "😊 Happy" },
  { value: "Sad", label: "😔 Sad" },
  { value: "Anxious", label: "😟 Anxious" },
  { value: "Excited", label: "🤩 Excited" },
  { value: "Angry", label: "😡 Angry" },
  { value: "Relaxed", label: "😌 Relaxed" },
  { value: "Surprised", label: "😮 Surprised" },
  { value: "Tired", label: "🥱 Tired" },
  { value: "Confused", label: "😕 Confused" },
  { value: "Loved", label: "😍 Loved" },
  { value: "Silly", label: "🤪 Silly" },
  { value: "Motivated", label: "💪 Motivated" },
  { value: "Bored", label: "😐 Bored" },
  { value: "Grateful", label: "🙏 Grateful" },
  { value: "Proud", label: "😎 Proud" },
];

export default function AddMood() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");
  const [btnHover, setBtnHover] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mood) {
      setMessage("Please select a mood.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await fetch("http://localhost:5000/api/mood", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ mood, note }),
      });

      setMessage("Mood added successfully!");
      setMood("");
      setNote("");
    } catch (err) {
      console.error(err);
      setMessage("Failed to add mood.");
    }
  };

  const selectedMood = moodOptions.find((m) => m.value === mood);
  const emoji = selectedMood ? selectedMood.label.split(" ")[0] : "🎭";
  const moodLabel = selectedMood ? selectedMood.value : "Pick a mood!";

  return (
    <div style={styles.background}>
      <div style={styles.bgCircle1}></div>
      <div style={styles.bgCircle2}></div>
      <div style={styles.moodBox}>
        <h2 style={styles.heading}>🌈 Track Your Mood</h2>
        <p style={styles.subheading}>
          How do you feel right now? Let's log it beautifully.
        </p>
        <div style={styles.emojiPreview}>
          <div style={styles.emojiCircle}>{emoji}</div>
          <span style={styles.emojiLabel}>{moodLabel}</span>
        </div>
        <form style={styles.form} onSubmit={handleSubmit}>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            style={styles.select}
          >
            <option value="">Choose a Mood</option>
            {moodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Optional: Add a note or describe your thoughts"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={4}
            style={styles.textarea}
          ></textarea>
          <button
            type="submit"
            style={btnHover ? { ...styles.button, ...styles.buttonHover } : styles.button}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            Add Mood
          </button>
        </form>
        {message && (
          <p style={styles.message}>{message}</p>
        )}
      </div>
    </div>
  );
}
