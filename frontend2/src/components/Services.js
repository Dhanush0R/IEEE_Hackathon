// Services.js
import React, { useState } from 'react';
import './Services.css';
import Footer from './Footer'; 
import {states, districts_karnataka, taluks_blorerural} from '../data/data.js';

const Services = () => {
  const [state, setState] = useState('');
  const [districts, setDistricts] = useState([]);
  const [taluks, setTaluks] = useState([]);
  const [district, setDistrict] = useState("Select a District");
  const [taluk, setTaluk] = useState('');

  return (
    <div className="services-container">
      <h2>Services</h2>
      <div className="dropdown-container">
        <select
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            e.target.value ===  'Karnataka' ? setDistricts(districts_karnataka) : setDistricts([]);
            }}
        >
          <option key = '-1' value="Select a State">Select State</option>
          {states.map((state, index) => (
            <option key = {index} value={state}>{state}</option>
          ))}
        </select>
      </div>
      <div className="dropdown-container">
        <select
          value={district}
          onChange={(e) => {
            setDistrict(e.target.value)
            e.target.value ===  'Bengaluru Rural' ? setTaluks(taluks_blorerural) : setTaluks([]);
            }}
        >
          <option value="Select a District">Select District</option>
          {districts.map((state, index) => (
            <option key = {index} value={state}>{state}</option>
          ))}
        </select>
      </div>
      <div className="dropdown-container">
        <select
          value={taluk}
          onChange={(e) => setTaluk(e.target.value)}
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
