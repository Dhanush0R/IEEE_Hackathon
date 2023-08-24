// AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import the AboutUs.css file

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <h1 className="aboutus-heading">About Us</h1>
      <p className="aboutus-description">Welcome to the Government Asset Management Web App - your comprehensive solution for efficiently managing educational assets across India. Our platform addresses the complex task of overseeing a vast network of educational institutions, offices, and centers. With a user-friendly interface and robust features, we empower both Central and State Governments to seamlessly manage their assets and make informed decisions.</p>
      <h1 className='Who-We-Are'>Who We Are</h1>
      <p>We are a dedicated team of professionals driven by a shared vision of modernizing asset management for the education sector. Our expertise lies in creating innovative digital solutions that streamline operations, enhance transparency, and enable data-driven insights. By harnessing the power of technology, we are committed to contributing to the advancement of the education system in India.</p>
      <h1 className='Our-Mission'>Our Mission</h1>
      <p>At Government Asset Management Web App, our mission is to revolutionize the way educational assets are tracked and maintained. We understand the challenges faced by governments in managing a diverse range of assets, and our goal is to provide a comprehensive platform that simplifies this process. By offering user-friendly tools for asset tracking, real-time updates, and insightful analytics, we aim to empower administrators to make well-informed decisions that positively impact the education ecosystem.</p>
    </div>
  );
};

export default AboutUs;
