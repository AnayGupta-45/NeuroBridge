import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] text-white p-4 flex justify-between items-center shadow-lg">
      {/* Logo as home route */}
      <span
        className="text-2xl font-extrabold tracking-tight text-[#eebbc3] cursor-pointer drop-shadow-lg"
        onClick={() => navigate('/')}
      >
        NeuroBridge
      </span>

      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-[#eebbc3] font-medium transition">Home</Link>
        {!token && location.pathname === '/login' && (
          <Link to="/register" className="bg-[#eebbc3] text-[#232946] px-4 py-1 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">Register</Link>
        )}
        {!token && location.pathname === '/register' && (
          <Link to="/login" className="bg-[#eebbc3] text-[#232946] px-4 py-1 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">Login</Link>
        )}
        {!token && location.pathname === '/' && (
          <>
            <Link to="/login" className="bg-[#eebbc3] text-[#232946] px-4 py-1 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">Login</Link>
            <Link to="/register" className="border border-[#eebbc3] px-4 py-1 rounded-full font-bold text-[#eebbc3] hover:bg-[#eebbc3] hover:text-[#232946] transition">Register</Link>
          </>
        )}
        {token && (
          <button onClick={handleLogout} className="bg-[#eebbc3] text-[#232946] px-4 py-1 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition">Logout</button>
        )}
      </div>
    </nav>
  );
}
