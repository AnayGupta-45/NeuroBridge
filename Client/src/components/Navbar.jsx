import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../axios';

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await api.get('/auth/logout');
    if (onLogout) onLogout();
    navigate('/');
  };

  return (
    <nav className="bg-[#181c2f]/80 backdrop-blur-lg border-b border-white/10 text-white p-4 flex justify-between items-center shadow-lg">
      <div
        className="text-2xl font-extrabold tracking-tight text-[#eebbc3] cursor-pointer"
        onClick={() => navigate('/')}
      >
        NeuroBridge
      </div>
      <div className="flex items-center space-x-6">
        <Link to="/" className="hover:text-[#eebbc3] transition font-medium">Home</Link>
        <Link to="/dashboard" className="hover:text-[#eebbc3] transition font-medium">Dashboard</Link>
        <Link to="/register" className="hover:text-[#eebbc3] transition font-medium">Register</Link>
        <Link to="/settings" className="hover:text-[#eebbc3] transition font-medium">Settings</Link>
        {user && (
          <div className="flex items-center space-x-3">
            <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full border-2 border-[#eebbc3]/60" />
            <span className="font-bold">{user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-[#eebbc3] text-[#232946] px-4 py-1 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
