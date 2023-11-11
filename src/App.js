import './App.css';
import React, { useState } from 'react';
import { FormControl, InputLabel, Slider, Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Sliders from './components/sliders';

function App() {
  const [happyValue, setHappyValue] = useState(50);
  const [sadValue, setSadValue] = useState(50);
  const [energyValue, setEnergyValue] = useState(50);
  const [calmnessValue, setCalmnessValue] = useState(50);
  const [danceabilityValue, setDanceabilityValue] = useState(50);

  const handleHappyValue = (event, newValue) => {
    setHappyValue(newValue);
  };

  const handleSadValue = (event, newValue) => {
    setSadValue(newValue);
  };

  const handleEnergyValue = (event, newValue) => {
    setEnergyValue(newValue);
  };

  const handleCalmnessValue = (event, newValue) => {
    setCalmnessValue(newValue);
  };
  
  const handleDanceabilityValue = (event, newValue) => {
    setDanceabilityValue(newValue);
  };  

  const handleSubmit = () => {
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
      <p className="h2">
          What's your vibe?
        </p>
      <Link to="/addSong">New Page</Link>
      <Sliders />

    </div>
  );
}

export default App;
