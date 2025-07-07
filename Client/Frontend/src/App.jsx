import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import OAuthSuccess from './pages/OAuthSuccess';
import UserDashboard from './pages/UserDashboard';
import TherapistDashboard from './pages/TherapistDashboard';
import AddMood from './pages/AddMood';
import MoodHistory from './pages/MoodHistory';
import TherapistList from './pages/TherapistList';
import AIChat from './pages/AIChat';
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

        {/* User Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRole="user">
            <UserDashboard />
          </ProtectedRoute>
        } />
        <Route path="/mood-tracker" element={
          <ProtectedRoute allowedRole="user">
            <AddMood />
          </ProtectedRoute>
        } />
        <Route path="/mood-history" element={
          <ProtectedRoute allowedRole="user">
            <MoodHistory />
          </ProtectedRoute>
        } />
        <Route path="/ai-chat" element={
          <ProtectedRoute allowedRole="user">
            <AIChat />
          </ProtectedRoute>
        } />
        <Route path="/therapists" element={
          <ProtectedRoute allowedRole="user">
            <TherapistList />
          </ProtectedRoute>
        } />

        {/* Therapist Dashboard */}
        <Route path="/therapist-dashboard" element={
          <ProtectedRoute allowedRole="therapist">
            <TherapistDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}
  