// App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Change here
import Sliders from './components/sliders';
import { searchSpotify, getSpotifyAccessToken } from './spotifyAPI'; // Adjust the path accordingly

const App = ({ setSong }) => {
  const navigate = useNavigate(); // Change here

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

  const handleSubmit = async (happyValue, sadValue, energyValue, calmnessValue, danceabilityValue) => {
    try {
      // Perform your logic to get song details based on sliders' values
      const query = 'Anonymous Cory Wong';
      const songDetails = await searchSpotify(query);

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
