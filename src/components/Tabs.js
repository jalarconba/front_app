
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';

const Tabs = () => {
  return (
    <div className="tab-container">
      {/* Utiliza Link en lugar de Tab y envuelve el título en él */}
      <Link to="/" className="tab" style={{ backgroundColor: 'blue', textAlign: 'center', color: '#ffffff', textDecoration: 'none' }}>INICIO</Link>
    </div>
  );
};

export default Tabs;






