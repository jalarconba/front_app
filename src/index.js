<<<<<<< HEAD
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


=======
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

>>>>>>> e97ba119f95cc2a4a1d71d1fdfca9f583490e8cc
