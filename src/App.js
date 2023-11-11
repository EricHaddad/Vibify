import './App.css';
import React, { useState } from 'react';
import { FormControl, InputLabel, Slider, Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Sliders from './components/sliders';

function App() {
  
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
