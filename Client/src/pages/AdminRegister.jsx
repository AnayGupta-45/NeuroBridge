import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

export default function AdminRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminRegister = async (e) => {
    e.preventDefault();
    try {
      // ✅ Correct backend route
      await api.post('/auth/register/admin', { name, email, password });
      alert('Admin registered successfully. Please login.');
      navigate('/admin-login');
    } catch (err) {
      alert('Error: ' + (err.response?.data?.message || 'Admin registration failed'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] font-sans">
      <div className="flex flex-col items-center w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-10 animate-fadeIn">
        <h2 className="text-3xl mb-6 text-[#eebbc3] font-extrabold drop-shadow-lg">Admin Register</h2>
        <form onSubmit={handleAdminRegister} className="flex flex-col w-full space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Admin Name"
            className="border border-[#eebbc3]/30 bg-[#232946]/80 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Admin Email"
            className="border border-[#eebbc3]/30 bg-[#232946]/80 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-[#eebbc3]/30 bg-[#232946]/80 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition"
            required
          />
          <button
            type="submit"
            className="bg-[#eebbc3] text-[#232946] px-4 py-3 rounded-full font-bold shadow-md hover:bg-[#ffd6e0] transition"
          >
            Register
          </button>
        </form>

        {/* ✅ Google Registration Link (Fixed) */}
        <a
          href="http://localhost:5173/admin-login"
          className="mt-6 bg-[#eebbc3] text-[#232946] px-4 py-2 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition"
        >
          Register with Google (Admin)
        </a>
      </div>
    </div>
  );
}
