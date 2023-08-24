// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import myImage from './images/my-image.jpeg';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
        <img
          src={myImage}  // Use the imported image as the src
          alt="Page Image"
          className="page-image"
        />
        <div className="image-text">Text Over Image</div>
          <Routes>
            <Route exact path="/" element={Home} />
            <Route path="/about" element={AboutUs} /> 
            <Route path="/services" element={Services} />
            <Route path="/contact" element={Contact} />
            {/* Other routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
