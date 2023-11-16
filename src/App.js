import './App.css';
import React, { useState } from 'react';
import { FormControl, InputLabel, Slider, Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Sliders from './components/sliders';

function App() {
  
  const handleSubmit = (happyValue, sadValue, energyValue, calmnessValue, danceabilityValue) => {
    const message = `Happy Value: ${happyValue}, Sad Value: ${sadValue}, Energetic Value: ${energyValue}, Calmness Value: ${calmnessValue}, Danceability Value: ${danceabilityValue}`;
    alert(message);
    var csv = require('jquery-csv');
    var data = csv.toArray("Vibify_Database.csv");
    alert(data);
  };

  return (
    
    <div className="App">
      <head>
        <script src="jquery-csv.js"></script>
      </head>
      <header className="App-header">
        <p>
          Vibify
        </p>
      </header>
      <Link className='link' to="/addSong">Add a Song</Link>
      <p className="h2">
          What's your vibe?
        </p>
      <Sliders buttonName="LET'S VIBE" handleSubmit={handleSubmit}/>
      
    </div>
  );
}

export default App;
