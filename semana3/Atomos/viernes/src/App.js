
import './App.css';
import Login from './components/Login';
import Perfil from './components/Perfil';
import Registro from './components/Registro';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Galeria from './components/Galeria';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
          <Route path="/" element={<Navbar/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registro" element={<Registro/>} />
            <Route path="/perfil" element={<Perfil/>} />
            <Route path="/galeria" element={<Galeria/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

