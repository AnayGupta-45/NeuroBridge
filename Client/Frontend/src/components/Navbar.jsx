import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const isLanding = location.pathname === "/";
  const isDashboard = location.pathname === "/dashboard";

  return (
    <nav className="bg-gradient-to-br from-[#181c2f] via-[#232946] to-[#0f111a] text-white p-4 flex justify-between items-center shadow-lg">
      {/* Logo as home route */}
      <span
        className="text-2xl font-extrabold tracking-tight text-[#eebbc3] cursor-pointer drop-shadow-lg"
        onClick={() => navigate("/")}
      >
        NeuroBridge
      </span>

      <div className="space-x-4 flex items-center">
        {/* Show Home button only if not on home/landing page */}
        {location.pathname !== "/" && (
          <Link to="/" className="hover:text-[#eebbc3] font-medium transition">
            Home
          </Link>
        )}

        {/* Show Dashboard button on all pages except dashboard, if logged in */}
        {token && user && !isDashboard && (
          <button
            onClick={() => navigate("/dashboard")}
            className="border border-[#eebbc3] px-4 py-1 rounded-full font-bold text-[#eebbc3] hover:bg-[#eebbc3] hover:text-[#232946] transition"
          >
            Dashboard
          </button>
        )}

        {/* If on landing page and logged in, show user and logout */}
        {isLanding && token && user && (
          <>
            <span className="font-medium text-[#eebbc3]">
              Hello, {user.name.split(" ")[0]}
            </span>
            <button
              onClick={handleLogout}
              className="bg-[#eebbc3] text-[#232946] px-4 py-1 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition"
            >
              Logout
            </button>
          </>
        )}

        {/* If on dashboard and logged in, show only logout */}
        {isDashboard && token && (
          <button
            onClick={handleLogout}
            className="bg-[#eebbc3] text-[#232946] px-4 py-1 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition"
          >
            Logout
          </button>
        )}

        {/* If not logged in, show Login and Register on landing page */}
        {!token && isLanding && (
          <>
            <Link
              to="/login"
              className="border border-[#eebbc3] px-4 py-1 rounded-full font-bold text-[#eebbc3] hover:bg-[#eebbc3] hover:text-[#232946] transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-[#eebbc3] text-[#232946] px-4 py-1 rounded-full font-bold shadow hover:bg-[#ffd6e0] transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
