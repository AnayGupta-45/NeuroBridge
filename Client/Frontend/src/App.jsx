import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import OAuthSuccess from './pages/OAuthSuccess';
import UserDashboard from './pages/UserDashboard';
import TherapistDashboard from './pages/TherapistDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRole="user">
            <UserDashboard />
          </ProtectedRoute>
        } />
        <Route path="/therapist-dashboard" element={
          <ProtectedRoute allowedRole="therapist">
            <TherapistDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}
