import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function ProtectedRoute({ children, allowedRole }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
 const decoded = jwtDecode(token);

    if (decoded.role !== allowedRole) {
      return <Navigate to="/login" />;
    }

    return children;

  } catch (error) {
    return <Navigate to="/login" />;
  }
}
