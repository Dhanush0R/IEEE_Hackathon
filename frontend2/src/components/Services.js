// Services.js
import React, { useState } from 'react';
import './Services.css';
import Footer from './Footer'; 
import {states, districts, taluks} from '../data/data.js';

const Services = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');

  return (
    <div className="services-container">
      <h2>Services</h2>
      <div className="dropdown-container">
        <select
          value={selectedOption1}
          onChange={(e) => setSelectedOption1(e.target.value)}
        >
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key = {index} value={state}>{state}</option>
          ))}
        </select>
      </div>
      <div className="dropdown-container">
        <select
          value={selectedOption2}
          onChange={(e) => setSelectedOption2(e.target.value)}
        >
          <option value="">Select District</option>
          {districts.map((state, index) => (
            <option key = {index} value={state}>{state}</option>
          ))}
        </select>
      </div>
      <div className="dropdown-container">
        <select
          value={selectedOption3}
          onChange={(e) => setSelectedOption3(e.target.value)}
        >
          <option value="">Select Taluk</option>
          {taluks.map((state, index) => (
            <option key = {index} value={state}>{state}</option>
          ))}
        </select>
      </div>
     
    </div>
  );
};

export default Services;
