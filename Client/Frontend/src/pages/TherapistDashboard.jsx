import { useNavigate } from 'react-router-dom';

export default function TherapistDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h2 className="text-4xl font-bold mb-4">Welcome to Therapist Dashboard</h2>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">Logout</button>
    </div>
  );
}
