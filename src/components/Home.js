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



