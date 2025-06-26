import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { name, email, password });
      navigate('/login'); // Redirect to login after registration
    } catch (err) {
      alert('Registration failed');
    }
  };

  const googleRegister = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a]">
      <form
        onSubmit={handleRegister}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-10 space-y-6 w-full max-w-md animate-fadeIn"
      >
        <h2 className="text-3xl font-extrabold text-center text-[#eebbc3] drop-shadow-lg">User Register</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 rounded-lg bg-[#232946]/80 text-white placeholder-gray-400 border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg bg-[#232946]/80 text-white placeholder-gray-400 border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-lg bg-[#232946]/80 text-white placeholder-gray-400 border border-[#eebbc3]/30 focus:outline-none focus:ring-2 focus:ring-[#eebbc3] transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-[#eebbc3] text-[#232946] px-4 py-3 rounded-full font-bold shadow-md hover:bg-[#ffd6e0] transition"
        >
          Register
        </button>
        <button
          type="button"
          onClick={googleRegister}
          className="w-full border border-[#eebbc3] px-4 py-3 rounded-full font-bold text-[#eebbc3] hover:bg-[#eebbc3] hover:text-[#232946] transition flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.5l6.4-6.4C33.5 5.1 28.1 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.6 16.2 19.5 13 24 13c2.7 0 5.2.9 7.2 2.5l6.4-6.4C33.5 5.1 28.1 3 24 3c-7.2 0-13.3 4.1-16.7 10.1z"/><path fill="#FBBC05" d="M24 43c5.8 0 10.7-1.9 14.3-5.2l-6.6-5.4C29.7 34.6 27 35.5 24 35.5c-5.7 0-10.5-3.8-12.2-9.1l-7 5.4C7.7 39.1 15.2 43 24 43z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.2 5.5-7.7 5.5-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5c2.7 0 5.2.9 7.2 2.5l6.4-6.4C33.5 5.1 28.1 3 24 3c-7.2 0-13.3 4.1-16.7 10.1z"/></g></svg>
          Register with Google
        </button>
      </form>
    </div>
  );
}

export default Register;
