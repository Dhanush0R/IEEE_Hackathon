// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import jwtDecode from 'jwt-decode';
import './Header.css';

const Header = () => {
  const jwtToken = localStorage.getItem('jwtToken');
  let adminName = 'aaa';
  if(jwtToken) {
    const decodedToken = jwtDecode(jwtToken);
    console.log(decodedToken);
    adminName = decodedToken.name;
  }
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Assets</Link>
        {/* <Link to="/contact">Contact</Link> */}
        {jwtToken ? (<Link to="/login" >Logout {adminName} </Link>):(<Link to="/login" className="login-button">Login</Link>)}
        
      </nav>
    </header>
  );
};

export default Header;
