import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sliders from './components/sliders';

function App() {
  
  const handleSubmit = (happyValue, sadValue, energyValue, calmnessValue, danceabilityValue) => {
    const message = `Happy Value: ${happyValue}, Sad Value: ${sadValue}, Energetic Value: ${energyValue}, Calmness Value: ${calmnessValue}, Danceability Value: ${danceabilityValue}`;
    alert(message);
  };

  return (
    <div className="App">
      
      <header className="App-header">
        <p>
          Vibify
        </p>
      </header>
      <Link className='link' to="/addSong">Add a Song</Link>
      <p className="h2">
          What's your vibe?
        </p>
      <Sliders buttonName="LET'S VIBE" handleSubmit={handleSubmit} height="70.69"/>
      
    </div>
  );
}

export default App;
