import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/register', formData);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] text-white font-sans">
      <div className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 px-10 py-12 max-w-md w-full">
        <h2 className="text-4xl font-extrabold mb-4 text-[#eebbc3] drop-shadow-lg">Register</h2>
        <form className="flex flex-col space-y-4 w-full" onSubmit={handleSubmit}>
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
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="p-3 rounded bg-[#232946]/80 text-white placeholder-gray-400 border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
      </div>
      <footer className="mt-12 text-sm text-gray-400">
        © 2025 <span className="text-[#eebbc3] font-semibold">NeuroBridge</span>. All rights reserved.
      </footer>
    </div>
  );
}
