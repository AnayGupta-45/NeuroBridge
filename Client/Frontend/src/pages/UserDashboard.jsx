import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user info from localStorage or API
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

  if (!user) {
    return null; // or a loader
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] font-sans text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#181c2f]/80 backdrop-blur-lg border-r border-white/10 flex flex-col p-6 space-y-8 shadow-2xl">
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-white hover:text-[#eebbc3] font-medium text-left transition"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="text-white hover:text-[#eebbc3] font-medium text-left transition"
          >
            Profile
          </button>
          <button
            onClick={() => navigate("/settings")}
            className="text-white hover:text-[#eebbc3] font-medium text-left transition"
          >
            Settings
          </button>
        </nav>
        <div className="mt-auto flex items-center gap-3">
          <img
            src={
              user.avatar ||
              "https://ui-avatars.com/api/?name=" +
                encodeURIComponent(user.name)
            }
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
            <p className="text-gray-300 mt-2">
              Here’s your NeuroBridge dashboard overview.
            </p>
          </div>
          <button className="bg-[#eebbc3] text-[#232946] px-6 py-2 rounded-full font-bold shadow-md hover:bg-[#ffd6e0] transition">
            New Project
          </button>
        </header>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col items-start">
            <div className="text-2xl font-bold text-[#eebbc3] mb-2">
              Active Projects
            </div>
            <div className="text-4xl font-extrabold mb-1">3</div>
            <div className="text-gray-300">You have 3 ongoing projects.</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col items-start">
            <div className="text-2xl font-bold text-[#eebbc3] mb-2">
              Collaborators
            </div>
            <div className="text-4xl font-extrabold mb-1">8</div>
            <div className="text-gray-300">
              Collaborate with 8 team members.
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col items-start">
            <div className="text-2xl font-bold text-[#eebbc3] mb-2">Tasks</div>
            <div className="text-4xl font-extrabold mb-1">15</div>
            <div className="text-gray-300">15 tasks pending this week.</div>
          </div>
        </section>

        {/* Quick Actions & Recent Activity */}
        <section className="mt-8 flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
            <h2 className="text-xl font-bold text-[#eebbc3] mb-3">
              Quick Actions
            </h2>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-[#eebbc3] text-[#232946] px-4 py-2 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">
                Start New Task
              </button>
              <button className="bg-[#232946] text-[#eebbc3] px-4 py-2 rounded-full font-bold shadow border border-[#eebbc3]/40 hover:bg-[#eebbc3] hover:text-[#232946] transition">
                Invite Collaborator
              </button>
            </div>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
            <h2 className="text-xl font-bold text-[#eebbc3] mb-3">
              Recent Activity
            </h2>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>
                ✔️ Project <span className="text-[#eebbc3]">BrainSync</span>{" "}
                updated
              </li>
              <li>
                ➕ Added new collaborator{" "}
                <span className="text-[#eebbc3]">Alice</span>
              </li>
              <li>
                📝 Task <span className="text-[#eebbc3]">Data Analysis</span>{" "}
                marked complete
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
