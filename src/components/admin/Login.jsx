import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Verificando credenciales específicas
    setTimeout(() => {
      const VALID_USER = 'Wess_Admin2026';
      const VALID_PASS = '$2026prof';

      if (username === VALID_USER && password === VALID_PASS) {
        onLogin({
          username,
          password,
          token: btoa(`${username}:${password}`)
        });
      } else {
        setError('Usuario o contraseña incorrectos. Por favor intenta de nuevo.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Admin Weightloss Professional Nutrition</h1>
          <p>Gestiona tus redes sociales</p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <div className="form-group">
            <label>Usuario WP</label>
            <input
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Ej: admin"
            />
          </div>

          <div className="form-group">
            <label>Contraseña de Aplicación</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="xxxx xxxx xxxx xxxx"
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? <div className="loader"></div> : 'Entrar'}
          </button>
        </form>

        <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '1rem', textAlign: 'center' }}>
          Usa "Application Passwords" de WordPress para mayor seguridad.
        </p>
      </div>
    </div>
  );
};

export default Login;
