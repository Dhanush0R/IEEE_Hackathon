import React from 'react';
import './App.css';
import Carousel from './components/Carousel';

const App = () => {
  const images = [
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhd&psig=AOvVaw14AFKxps4qKnrwisRp7V8Z&ust=1692981265985000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCGwevc9YADFQAAAAAdAAAAABAE',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbook&psig=AOvVaw14AFKxps4qKnrwisRp7V8Z&ust=1692981265985000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCGwevc9YADFQAAAAAdAAAAABAJ',
    
    // Add more image URLs as needed
  ];

  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
};

export default App;
