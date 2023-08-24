// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link> 
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
