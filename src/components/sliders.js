import React, { useState } from 'react';
import { FormControl, InputLabel, Slider, Box, Button, Typography } from '@mui/material';

function Sliders ({buttonName, handleSubmit, height}) {
    const [happyValue, setHappyValue] = useState(50);
    const [sadValue, setSadValue] = useState(50);
    const [energyValue, setEnergyValue] = useState(50);
    const [calmnessValue, setCalmnessValue] = useState(50);
    const [danceabilityValue, setDanceabilityValue] = useState(50);

    const boxHeight = height + "vh";

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
    
    const submitForm = () =>{
        handleSubmit(happyValue, sadValue, energyValue, calmnessValue, danceabilityValue)
    }

    return(
        <Box
      display="flex"
      flexDirection="column" 
      alignItems="center"
      height= {boxHeight}
      >
        <Typography marginBottom="8px" color="white" variant="h6">Happy</Typography>
        <Slider
          aria-label="Happy"
          value={happyValue}
          onChange={handleHappyValue}
          valueLabelDisplay="auto"
          className="sliderStyle"
        />
        <Typography marginBottom="8px"  color="white" variant="h6">Sad</Typography>
        <Slider
          aria-label="Sad"
          value={sadValue}
          onChange={handleSadValue}
          valueLabelDisplay="auto"
          className="sliderStyle"
        />
        <Typography marginBottom="8px" color="white" variant="h6">Energy</Typography>
        <Slider
          aria-label="Energy"
          value={energyValue}
          onChange={handleEnergyValue}
          valueLabelDisplay="auto"
          className="sliderStyle"
        />
        <Typography marginBottom="8px" color="white" variant="h6">Calmness</Typography>
        <Slider
          aria-label="Calmness"
          value={calmnessValue}
          onChange={handleCalmnessValue}
          valueLabelDisplay="auto"
          className="sliderStyle"
        />

        <Typography marginBottom="8px" color="white" variant="h6">Danceability</Typography>
        <Slider
          aria-label="Danceability"
          value={danceabilityValue}
          onChange={handleDanceabilityValue}
          valueLabelDisplay="auto"
          className="sliderStyle"
        />
        <Box className="buttonContainer">
          <Button variant="contained" onClick={submitForm}>
            {buttonName}
          </Button>
        </Box>
      </Box>
    );
}

export default Sliders;