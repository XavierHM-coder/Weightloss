import React, { useState, useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

const AdminApp = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for saved credentials
    const savedUser = localStorage.getItem('wp_auth');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (credentials) => {
    setUser(credentials);
    localStorage.setItem('wp_auth', JSON.stringify(credentials));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('wp_auth');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="admin-container">
      <div className="logout-bar">
        <span>Conectado como <strong>{user.username}</strong></span>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
      <Dashboard user={user} />
    </div>
  );
};

export default AdminApp;
