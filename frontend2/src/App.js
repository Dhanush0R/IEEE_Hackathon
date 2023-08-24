// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/services"element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login"element={<Login/>} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
