import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios';

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      if (res.data.user.role !== 'admin') throw new Error();
      navigate('/admin-dashboard');
    } catch (err) {
      alert('Invalid admin credentials');
    }
  };

  const googleAdminLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google?admin=true';
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleAdminLogin} className="bg-white p-8 rounded shadow-md space-y-4 w-80">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        <input type="email" placeholder="Admin Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="btn-primary">Login</button>
        <button type="button" onClick={googleAdminLogin} className="btn-secondary">Admin Google Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
