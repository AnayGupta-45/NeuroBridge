import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/login', { email, password });
      navigate('/dashboard');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  const googleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
      <div className="text-center mt-4">
        <button onClick={googleLogin} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
