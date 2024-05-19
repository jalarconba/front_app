<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-start vh-75">
      <div className="text-center mt-5">
        <h1 className="mb-4">Bienvenido elija el formulario a utilizar</h1>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/loginform" className="btn btn-primary btn-lg">Registro Alumnos</Link>
          <Link to="/registro2" className="btn btn-primary btn-lg">Registro Asistencia</Link>
          <Link to="/atrasos" className="btn btn-primary btn-lg">Registro Atrasos</Link>
          <Link to="/datos-apoderados" className="btn btn-primary btn-lg">Datos Apoderados</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;



=======
import React from 'react';
import backgroundImage from '../img/img.jpg'; // Importa la imagen de fondo

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content text-center text-light py-3">
          <h2 className="mb-0">Bienvenidos</h2>
          {/* Contenido adicional de la página de inicio */}
        </div>
      </div>
    </div>
  );
};

export default Home;



>>>>>>> e97ba119f95cc2a4a1d71d1fdfca9f583490e8cc
