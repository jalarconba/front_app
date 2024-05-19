<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import Tab from './Tabs';

const Header = () => {
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
              <li className="nav-item">
                <div className="card bg-primary">
                  <Link className="nav-link text-light" to="/login">LOGIN</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="card bg-primary">
                  <Link className="nav-link text-light" to="/home">VOLVER</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="card bg-primary">
                  <Link className="nav-link text-light" to="/contact">CONTACTO</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="card bg-secondary">
                  <Link className="nav-link text-light" to="/">CERRAR SESIÓN</Link>
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
=======
import React from 'react';
import Tab from './Tabs';

const Header = () => {
  return (
    <header>
      <div className="fa fa-align-center" aria-hidden="true"></div>
      <h1>Cont-Asist </h1>
      <h2>Sistema de Registro de Asistencia Escolar</h2>
      <Tab />
    </header>
  );
};

export default Header;
>>>>>>> e97ba119f95cc2a4a1d71d1fdfca9f583490e8cc
