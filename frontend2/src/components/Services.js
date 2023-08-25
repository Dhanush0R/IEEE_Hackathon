// Services.js
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import './Services.css';
import Footer from './Footer'; 
import {states, districts_karnataka, taluks_blorerural} from '../data/data.js';
import WideBar from './WideBar';
import LeafletComponent from './LeafletComponent.jsx';

const Services = () => {
  const [state, setState] = useState('');
  const [districts, setDistricts] = useState([]);
  const [taluks, setTaluks] = useState([]);
  const [district, setDistrict] = useState("");
  const [taluk, setTaluk] = useState('');
  const [dataArray, setDataArray] = useState([])

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
      // axios.get(link).then((response) => {
      //   console.log(response)
      // })
      fetch("http://localhost:5000"+link)
      .then((response) => response.json())
      .then((data) => {
        setDataArray(data)
        console.log(data)
      })
      .catch((err) => {console.log(err)});
    }
    
  },[state,district,taluk])
  const getData = () => {

  }
  return (
    <div className="services-container">
      <h2>Asset Details</h2>
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
        {dataArray.map((data, index) =>{
        console.log(data);
        return (
          
          <Link
            key={index}
            to={{
              pathname: `/asset/${data._id}`, // Specify the URL with asset ID
              state: { assetData: data } // Pass asset data to location state
            }}
            className="wide-bar-link" // Add a CSS class for styling
          >
            <WideBar key = {index} title = {data.name} children = {"View Details>>>"} > </WideBar>
            </Link>
          
          
          )
      })}
      <LeafletComponent /> 
    </div>
  );
};

export default Services;
