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
