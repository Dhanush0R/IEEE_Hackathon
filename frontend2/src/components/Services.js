// Services.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Services.css';
import Footer from './Footer'; 
import {states, districts_karnataka, taluks_blorerural} from '../data/data.js';

const Services = () => {
  const [state, setState] = useState('');
  const [districts, setDistricts] = useState([]);
  const [taluks, setTaluks] = useState([]);
  const [district, setDistrict] = useState("");
  const [taluk, setTaluk] = useState('');

  useEffect(() => {
    let link = "/api/asset";
    if(state !== '')
    {
      if(state !== 'Select A State' && state !== '')
      {
        link += "?state="+state;
      }
      if(district !== 'Select A District' && district !== '')
      {
        link += "&district="+district;
      }
      if(taluk !== 'Select A Taluk' && taluk !== '')
      {
        link += "&taluk="+taluk;
      }
      console.log(link);
      axios.get(link).then((response) => {
        console.log(response)
      })
    }
    
  },[state,district,taluk])
  const getData = () => {

  }
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
          <option value="Select a Taluk">Select Taluk</option>
          {taluks.map((state, index) => (
            <option key = {index} value={state}>{state}</option>
          ))}
        </select>
      </div>
     
    </div>
  );
};

export default Services;
