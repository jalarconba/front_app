import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LoginForm from './LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Registro2 from './components/Registro2';
import Atrasos from './components/Atrasos';
import Apoderado from './components/Apoderados';
import ProtectedRoutes from './utils/ProtectedRoutes';

// Componente Footer que se mostrará solo en la página principal
function MainFooter() {
  return <Footer />;
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element ={<ProtectedRoutes/>}/>
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registro2" element={<Registro2 />} />
        <Route path="/atrasos" element={<Atrasos />} />
        <Route path="/apoderados" element={<Apoderado />} />
      </Routes>
      <MainFooter /> {/* Mostrar el footer en todas las rutas */}
    </Router>
  );
}

export default App;









