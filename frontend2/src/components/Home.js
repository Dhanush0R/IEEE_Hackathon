// Home.js
import React from 'react';


import './Home.css'; // Import the Home.css file

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Our Website</h2>
      <img
          className="page-image"
          src="3.jpeg"  // Replace with the actual path to your image
          alt="Page Image"
        />
      
      {/* Other content */}
    </div>
  );
};

export default Home;
