// Services.js
import React, { useState } from 'react';
import './Services.css';
import Footer from './Footer'; 

const Services = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');

  return (
    <div className="services-container">
      <h2>Asset Details</h2>
      <div className="dropdown-container">
        <select
          value={selectedOption1}
          onChange={(e) => setSelectedOption1(e.target.value)}
        >
          <option value="">Select Option 1</option>
          <option value="option1-1">Option 1-1</option>
          <option value="option1-2">Option 1-2</option>
          {/* Add more options */}
        </select>
      </div>
      <div className="dropdown-container">
        <select
          value={selectedOption2}
          onChange={(e) => setSelectedOption2(e.target.value)}
        >
          <option value="">Select Option 2</option>
          <option value="option2-1">Option 2-1</option>
          <option value="option2-2">Option 2-2</option>
          {/* Add more options */}
        </select>
      </div>
      <div className="dropdown-container">
        <select
          value={selectedOption3}
          onChange={(e) => setSelectedOption3(e.target.value)}
        >
          <option value="">Select Option 3</option>
          <option value="option3-1">Option 3-1</option>
          <option value="option3-2">Option 3-2</option>
          {/* Add more options */}
        </select>
      </div>
     
    </div>
  );
};

export default Services;
