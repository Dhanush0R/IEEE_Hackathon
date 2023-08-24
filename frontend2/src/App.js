// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AboutUs'; 
import Services from './components/Services';
import Contact from './components/Contact';
import Home from './components/Home';
// import myImage from './images/my-image.jpeg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
        {/* <img
          src={myImage}  // Use the imported image as the src
          alt="Page Image"
          className="page-image"
        />
        <div className="image-text">Text Over Image</div> */}
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} /> 
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
            {/* Other routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
