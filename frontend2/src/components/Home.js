// Home.js
import React from 'react';
import './Home.css'; // Import the Home.css file

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Shalaa Mitra</h2>
      <img
          className="page-image"
          src="3.jpeg"  // Replace with the actual path to your image
          alt="Page Image"
        />
      {/* <CarouselComponent /> Use the Carousel component */}
      {/* <img src="public/1.jpeg" alt="Header" className="header-image" /> */}
      {/* Other content */}
    </div>
  );
};

export default Home;
