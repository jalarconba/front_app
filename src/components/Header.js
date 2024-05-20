
import React from 'react';
import { Link } from 'react-router-dom';


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
                  <Link className="nav-link text-light" to="/">HOME</Link>
                </div>
              </li>
               <li className="nav-item">
                <div className="card bg-primary">
                  <Link className="nav-link text-light" to="/home">VOLVER</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="card bg-primary">
                  <Link className="nav-link text-light" to="/contacto">CONTACTO</Link>
                </div>
                </li>
               </ul>
          </div>
        </div>
      </nav>
      <h2 className="text-center mb-3">Sistema de Registro de Asistencia Escolar</h2>
    
    </header>
  );
};

export default Header;
