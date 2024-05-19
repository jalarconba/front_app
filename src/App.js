import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LoginForm from './LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Registro2 from './components/Registro2'; // Asegúrate de que la ruta sea correcta
import Atrasos from './components/Atrasos';
function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registro2" element={<Registro2 />} />
        <Route path="/atrasos" element={<Atrasos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



