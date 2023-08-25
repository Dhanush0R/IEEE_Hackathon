// WideBar.js
import React from 'react';
import './WideBar.css'; // Import the CSS file for styling

const WideBar = ({ title, children }) => {
  return (
    <div className="wide-bar">
      <h2 className="bar-title">{title}</h2>
      <div className="bar-content">{children}</div>
    </div>
  );
};

export default WideBar;
