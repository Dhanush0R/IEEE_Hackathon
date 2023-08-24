// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Assets</Link>
        </div>
        <div className="login-button">
          <Link to="/login" className="login-button">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
