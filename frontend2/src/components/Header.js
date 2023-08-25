// Header.js
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import jwtDecode from 'jwt-decode';
import './Header.css';

const Header = () => {
  let adminName = '';
  const jwtToken = localStorage.getItem('jwtToken');
    
    if(jwtToken) {
    const decodedToken = jwtDecode(jwtToken);
    console.log(decodedToken);
    adminName = decodedToken.name;
  }
  
  return (
    <header>
      <nav className="header-nav">
        <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Assets</Link>
        {/* <Link to="/contact">Contact</Link> */}
        {jwtToken && (<Link to="/asset/add" className="">Add Asset</Link>)}
        {jwtToken ? (<Link onClick = {() => {localStorage.removeItem('jwtToken');}} >Logout {adminName} </Link>):(<Link to="/login" className="login-button">Login</Link>)}
        
        </div>
      
      </nav>
    </header>
  );
};

export default Header;
