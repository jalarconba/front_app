// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import '../src/components/styles.css'; // Asegúrate de importar tus estilos aquí
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

