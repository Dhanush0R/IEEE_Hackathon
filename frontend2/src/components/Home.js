// Home.js
import React from 'react';
import CarouselComponent from './Carousel.jsx'; // Import the Carousel component
import LeafletComponent from './LeafletComponent.jsx'
import './Home.css'; // Import the Home.css file

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Our Website</h2>
      <CarouselComponent /> {/* Use the Carousel component */}
      <LeafletComponent /> 
      {/* Other content */}
    </div>
  );
};

export default Home;
