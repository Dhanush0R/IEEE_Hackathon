// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Login from './components/Login'; 
import Footer from './components/Footer';
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
            <Route path="/login"element={<Login/>} /> 
          </Routes>
          <img
          className="page-image"
          src="3.jpeg"  // Replace with the actual path to your image
          alt="Page Image"
        />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;