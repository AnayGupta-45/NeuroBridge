import { Link, useNavigate } from 'react-router-dom';
import api from '../axios';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.get('/auth/logout');
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <div className="text-white text-lg font-semibold">NeuroBridge</div>
      <div className="flex space-x-4">
        <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
        <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
        <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
        <Link to="/admin-dashboard" className="text-white hover:text-gray-300">Admin</Link>
        <button onClick={handleLogout} className="text-white hover:text-gray-300">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
