import React from 'react';

function AssetDetailsPage({ location }) {
  const assetData = location.state.assetData;

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
