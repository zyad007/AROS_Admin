import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Notfound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Redirecting to the home page...</p>
    </div>
  );
}
