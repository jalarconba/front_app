import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Tab from './Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  const showLogout = location.pathname !== '/';

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h1>Cont-Asist</h1></Link>
          <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="card bg-primary">
                  <Link className="nav-link text-light" to="/">PAGINA INICIO</Link>
                </div>
              </li>
              {!isAuthenticated && showLogout && (
                <li className="nav-item">
                  <div className="card bg-primary">
                    <Link className="nav-link text-light" to="/login">INICIAR SESIÓN</Link>
                  </div>
                </li>
              )}
              {isAuthenticated && showLogout && (
                <li className="nav-item">
                  <div className="card bg-primary">
                    <Link className="nav-link text-light" to="/" onClick={handleLogout}>CERRAR SESIÓN</Link>
                  </div>
                </li>
              )}
              <li className="nav-item">
                <div className="card bg-primary">
                  <Link className="nav-link text-light" to="/quienes_somos">QUIENES SOMOS</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="card bg-primary">
                  <Link className="nav-link text-light" to="/contact">CONTACTO</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2 className="text-center mb-3">Sistema de Registro de Asistencia Escolar</h2>
      <Tab />
    </header>
  );
};

export default Header;


