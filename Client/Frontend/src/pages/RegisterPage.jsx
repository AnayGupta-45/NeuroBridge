import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", formData);
      setMessage("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(
        err.response?.data?.message ||
          "Registration failed. Email may already be in use."
      );
    }
  };

  const handleGoogleRegister = () => {
    window.location.href = `http://localhost:5000/api/auth/google?role=${formData.role}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] text-white font-sans">
      <div className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 px-10 py-12 max-w-md w-full">
        <h2 className="text-4xl font-extrabold mb-4 text-[#eebbc3] drop-shadow-lg">
          Register
        </h2>

        <form
          className="flex flex-col space-y-4 w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="p-3 rounded bg-[#232946]/80 text-white placeholder-gray-400 border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="p-3 rounded bg-[#232946]/80 text-white placeholder-gray-400 border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="p-3 rounded bg-[#232946]/80 text-white placeholder-gray-400 border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <select
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="p-3 rounded bg-[#232946]/80 text-white border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition"
            value={formData.role}
          >
            <option value="user">User</option>
            <option value="therapist">Therapist</option>
          </select>

          <button
            className="bg-[#eebbc3] text-[#232946] p-3 rounded-full font-bold shadow-md hover:bg-[#ffd6e0] transition"
            type="submit"
          >
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleRegister}
          className="mt-6 flex items-center justify-center gap-3 bg-white border border-[#eebbc3] text-[#232946] p-3 rounded-full font-bold shadow hover:bg-[#eebbc3] hover:text-[#232946] transition w-full"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <g>
              <path
                fill="#4285F4"
                d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.5l6.4-6.4C33.5 5.1 28.1 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"
              />
              <path
                fill="#34A853"
                d="M6.3 14.7l7 5.1C15.6 16.2 19.5 13 24 13c2.7 0 5.2.9 7.2 2.5l6.4-6.4C33.5 5.1 28.1 3 24 3c-7.2 0-13.3 4.1-16.7 10.1z"
              />
              <path
                fill="#FBBC05"
                d="M24 43c5.8 0 10.7-1.9 14.3-5.2l-6.6-5.4C29.7 34.6 27 35.5 24 35.5c-5.7 0-10.5-3.8-12.2-9.1l-7 5.4C7.7 39.1 15.2 43 24 43z"
              />
              <path
                fill="#EA4335"
                d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.2 5.5-7.7 5.5-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5c2.7 0 5.2.9 7.2 2.5l6.4-6.4C33.5 5.1 28.1 3 24 3c-7.2 0-13.3 4.1-16.7 10.1z"
              />
            </g>
          </svg>
          <span>Register with Google</span>
        </button>

        {message && <p className="mt-4 text-sm text-[#eebbc3]">{message}</p>}
      </div>

      <footer className="mt-12 text-sm text-gray-400">
        © 2025 <span className="text-[#eebbc3] font-semibold">NeuroBridge</span>
        . All rights reserved.
      </footer>
    </div>
  );
}
