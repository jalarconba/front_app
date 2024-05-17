import React from 'react';
import { Link } from 'react-router-dom';
// import './styles.css'; // Asegúrate de que el archivo CSS esté en el mismo directorio
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
  return (
    <section className="bg-gray-900 text-white min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="text-center mb-4">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Understand User Flow.
          <span className="sm:block"> Increase Conversion. </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
        </p>
      </div>
      <div className="d-flex flex-column align-items-center">
        <Link to="/registro-alumnos" className="btn btn-primary mb-3">
          Registro de Alumnos
        </Link>
        <Link to="/asistencia" className="btn btn-primary mb-3">
          Asistencia
        </Link>
        <Link to="/atrasos" className="btn btn-primary mb-3">
          Atrasos
        </Link>
        <Link to="/datos-apoderados" className="btn btn-primary mb-3">
          Datos Apoderados
        </Link>
      </div>
    </section>
  );
};

export default Home;
