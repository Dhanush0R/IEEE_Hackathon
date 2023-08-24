// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Assets</Link>
        {/* <Link to="/contact">Contact</Link> */}
        <Link to="/login" className="login-button">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
