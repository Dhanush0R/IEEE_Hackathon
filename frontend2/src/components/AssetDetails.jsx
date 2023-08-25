import React from 'react';
import { useLocation } from 'react-router-dom';
function AssetDetailsPage() {
    const location = useLocation(); // Use the useLocation hook to access location object
    console.log(location);
    const assetData = location.state ? location.state.assetData : null;

  if (!assetData) {
    return <div>Loading...</div>; // Handle loading state if needed
  }

  return (
    <div className="asset-details">
      <h3>Asset Details</h3>
      <p>Name: {assetData.name}</p>
      <p>Type: {assetData.type}</p>
      <p>Location: {assetData.location}</p>
      <p>Capacity: {assetData.capacity}</p>
      <p>Year of Construction: {assetData.yearOfConstruction}</p>
      
    </div>
  );
}

export default AssetDetailsPage;
