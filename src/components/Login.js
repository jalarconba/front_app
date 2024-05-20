import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [password, setPassword] = useState("");   
  const [username, setUsername] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Verifica que ambos campos no estén vacíos
    if (!username || !password) {
      alert("Por favor ingrese usuario y contraseña");
      return;
    }

    try {
      // Envía la solicitud al servidor
      const response = await Axios.post("http://localhost:3002/login", { username, password });
      
      // Almacena el token de sesión en localStorage
      localStorage.setItem('token', response.data.token);
      
      // Inicio de sesión exitoso, redirige al usuario a la página deseada
      navigate(`/home`);
    } catch (error) {
      console.error(error);
      // Muestra un mensaje de error al usuario si las credenciales son inválidas
      setLoginError(true);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Acceso Login</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '20px', borderRadius: '10px' }}>
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
                {loginError && <p className="text-danger">Credenciales inválidas</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;



