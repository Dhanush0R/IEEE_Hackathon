// Carousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css'; // Import the Carousel.css file

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      <div className="carousel-item">
        <img src={require('../images/1.jpeg').default} alt="Slide 1" />
      </div>
      <div className="carousel-item">
        <img src={require('../images/2.jpeg').default} alt="Slide 2" />
      </div>
      <div className="carousel-item">
        <img src={require('../images/3.jpeg').default} alt="Slide 3" />
      </div>
      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default CarouselComponent;
