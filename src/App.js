// App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Change here
import Sliders from './components/sliders';
import { searchSpotify, getSpotifyAccessToken } from './spotifyAPI'; // Adjust the path accordingly

const App = ({ setSong }) => {
  const navigate = useNavigate(); // Change here

  // Making a GET request
  const readCSV = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:4000/read-file/Vibify_Database.csv');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Spotify access token
        const accessToken = await getSpotifyAccessToken();
        console.log('Access Token:', accessToken);
        // Perform any other initialization logic with the token if needed
      } catch (error) {
        console.error('Error getting access token:', error);
      }
    };

    fetchData();
  }, []); // Make sure to include dependencies if needed

  const average = (array) => {
    array = array.replace('[', '');
    array = array.replace(']', '');
    array = array.replace('\"', '');
    array = array.split(",");

    var sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += parseInt(array[j]);
    }

    return sum / array.length;
  }

  const cs = (vec1, vec2) => {
    var numerator = 0;
    var denominator = 0;

    for (let j = 0; j < vec1.length; j++) {
      numerator += (vec1[j] * vec2[j]);
    }

    var vec1Magnitude = 0;
    var vec2Magnitude = 0;

    for (let j = 0; j < vec1.length; j++) {
      vec1Magnitude += (vec1[j]**2);
      vec2Magnitude += (vec2[j]**2);
    }

    denominator = (Math.sqrt(vec1Magnitude) * Math.sqrt(vec2Magnitude));

    if (denominator == 0) {
      return 0
    } 

    return numerator/denominator
  }

  const calculateResult = async (happyValue, sadValue, energyValue, calmnessValue, danceabilityValue, data) => {
    var currentSong = "";
    var currentScore = 0;
    var highSong = "";
    var highScore = 0;
    data = data.split("\n");

    var userArray = [happyValue, sadValue, energyValue, calmnessValue, danceabilityValue];
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].split(",\"");
      currentSong = data[i][0];
      var currentSongArray = [average(data[i][1]), average(data[i][2]), average(data[i][3]), average(data[i][4]), average(data[i][5])];
      currentScore = cs(userArray, currentSongArray);
      if (currentScore > highScore) {
        highScore = currentScore;
        highSong = currentSong;
      }

    }
    return [highSong, highScore];
  }

  const handleSubmit = async (happyValue, sadValue, energyValue, calmnessValue, danceabilityValue) => {
    try {
      var data = await readCSV();
      var result = await calculateResult( happyValue, sadValue, energyValue, calmnessValue, danceabilityValue, data);      
      // Perform your logic to get song details based on sliders' values
      const songDetails = await searchSpotify(result[0]);
      // Update state with song details
      setSong(songDetails);
      // Navigate to the new page
      navigate('/songDetails'); // Change here
    } catch (error) {
      console.error('Error fetching song:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Vibify</p>
      </header>
      <Link className='link' to="/addSong">Add a Song</Link>
      <p className="h2">What's your vibe?</p>
      <Sliders buttonName="LET'S VIBE" handleSubmit={handleSubmit} height="70.69"/>
    </div>
  );
}

export default App;
