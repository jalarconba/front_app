import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
  { username: 'jab', password: '12345' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
];

function Main() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      navigate('/loginform'); // Redirige al usuario a la página de App después del inicio de sesión
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Acceso Login</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '5px', borderRadius: '10px' }}>
            <div className="mb-3 row">
              <label htmlFor="username" className="col-md-4 col-form-label">Usuario:</label>
              <div className="col-md-8">
                <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="password" className="col-md-4 col-form-label">Contraseña:</label>
              <div className="col-md-8">
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 offset-md-4">
                <button type="button" className="btn btn-primary" style={{ backgroundColor: '#007bff', border: 'none' }} onClick={handleLogin}>Iniciar sesión</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
