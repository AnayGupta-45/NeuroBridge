import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../axios';

function ProtectedRoute({ children, adminOnly = false }) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    api.get('/protected/profile')
      .then(res => {
        if (adminOnly && res.data.user.role !== 'admin') {
          setAuthorized(false);
        } else {
          setAuthorized(true);
        }
      })
      .catch(() => setAuthorized(false))
      .finally(() => setLoading(false));
  }, [adminOnly]);

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;

  return authorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
