import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../axios';

function AdminProtectedRoute({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/protected/admin-dashboard')
      .then(() => {
        setAuthorized(true);
        setLoading(false);
      })
      .catch(() => {
        setAuthorized(false);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return authorized ? children : <Navigate to="/admin-login" />;
}

export default AdminProtectedRoute;
