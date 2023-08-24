// Carousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css'; // Import the Carousel.css file
import image1 from '../images/1.jpeg'

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={true}
    >
      <div className="carousel-item">
        <img src={image1} alt="Slide 1" />
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
