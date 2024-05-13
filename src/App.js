import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LoginForm from './LoginForm';
import Header from './components/Header'; 
import Footer from  './components/Footer';

function Main() {
  return (
    <Router>
      <Header /> {/* Agregar el componente Navbar */}
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/loginform/:username" element={<LoginForm />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default Main;
