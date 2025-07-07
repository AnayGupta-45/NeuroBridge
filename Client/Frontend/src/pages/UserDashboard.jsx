import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      navigate("/login");
    } else {
      setUser(userData);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] font-sans text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#181c2f]/80 backdrop-blur-lg border-r border-white/10 flex flex-col p-6 space-y-8 shadow-2xl">
        <nav className="flex flex-col gap-4">
          <button onClick={() => navigate("/dashboard")}
            className="text-white hover:text-[#eebbc3] font-medium text-left transition">
            Dashboard
          </button>
          <button onClick={() => navigate("/profile")}
            className="text-white hover:text-[#eebbc3] font-medium text-left transition">
            Profile
          </button>
          <button onClick={() => navigate("/settings")}
            className="text-white hover:text-[#eebbc3] font-medium text-left transition">
            Settings
          </button>
          <button onClick={handleLogout}
            className="text-white hover:text-[#eebbc3] font-medium text-left transition">
            Logout
          </button>
        </nav>

        <div className="mt-auto flex items-center gap-3">
          <img
            src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-[#eebbc3]/60"
          />
          <div>
            <div className="font-bold">{user.name}</div>
            <div className="text-xs text-gray-400">{user.email}</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 flex flex-col gap-8">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-[#eebbc3] drop-shadow-lg">
              Welcome, {user.name.split(" ")[0]}!
            </h1>
          </div>
        </header>

        {/* Quick Actions */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col md:flex-row gap-4">
          <button onClick={() => navigate("/mood-tracker")}
            className="bg-[#eebbc3] text-[#232946] px-4 py-2 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">
            Add Mood
          </button>

          <button onClick={() => navigate("/therapists")}
            className="bg-[#eebbc3] text-[#232946] px-4 py-2 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">
            Book Therapist
          </button>

          <button onClick={() => navigate("/ai-chat")}
            className="bg-[#232946] text-[#eebbc3] px-4 py-2 rounded-full font-bold shadow border border-[#eebbc3]/40 hover:bg-[#eebbc3] hover:text-[#232946] transition">
            AI Chat
          </button>
        </section>

        {/* Dashboard Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mood Tracker */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col items-start">
            <div className="text-2xl font-bold text-[#eebbc3] mb-2">Mood Summary</div>
            <div className="text-gray-300 mb-2">Track and visualize your mood trends.</div>
            <button onClick={() => navigate("/mood-history")}
              className="bg-[#eebbc3] text-[#232946] px-4 py-2 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">
              View Mood History
            </button>
          </div>

          {/* Therapist Booking */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col items-start">
            <div className="text-2xl font-bold text-[#eebbc3] mb-2">Therapist Appointments</div>
            <div className="text-gray-300 mb-2">Check and manage your bookings.</div>
            <button onClick={() => navigate("/my-bookings")}
              className="bg-[#eebbc3] text-[#232946] px-4 py-2 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">
              My Appointments
            </button>
          </div>

          {/* AI Chat */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col items-start">
            <div className="text-2xl font-bold text-[#eebbc3] mb-2">AI Chat</div>
            <div className="text-gray-300 mb-2">Chat with your AI companion anytime.</div>
            <button onClick={() => navigate("/ai-chat")}
              className="bg-[#232946] text-[#eebbc3] px-4 py-2 rounded-full font-bold shadow border border-[#eebbc3]/40 hover:bg-[#eebbc3] hover:text-[#232946] transition">
              Start Chat
            </button>
          </div>
        </section>

        {/* Optional: Mood-Based Music */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col items-start">
            <div className="text-2xl font-bold text-[#eebbc3] mb-2">Music Suggestions</div>
            <div className="text-gray-300 mb-2">Personalized music based on your mood.</div>
            <button onClick={() => navigate("/mood-tracker")}
              className="bg-[#eebbc3] text-[#232946] px-4 py-2 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">
              View Suggestions
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
            <h2 className="text-xl font-bold text-[#eebbc3] mb-3">Recent Activity</h2>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>✔️ You added a new mood entry</li>
              <li>📅 Booked a session with a therapist</li>
              <li>💬 Started a conversation with NeuroBridge AI</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
