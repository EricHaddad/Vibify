// App.js
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Change here
import Sliders from './components/sliders';
import { searchSpotify, getSpotifyAccessToken } from './spotifyAPI'; // Adjust the path accordingly
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./login"

const App = ({ setSong, setMood, setToken, setSongList }) => {
  const navigate = useNavigate(); // Change here

  // Making a GET request
  const readCSV = async () => {
    try {
      const response = await axios.get('http://localhost:4000/read-file/Vibify_Database.csv');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Spotify access token
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get('accessToken');
        console.log(`params access Token: ${accessToken}`);
        if(accessToken !== null){
          setToken(accessToken)
        }
        // Perform any other initialization logic with the token if needed
      } catch (error) {
        console.error('Error getting access token:', error);
      }
    };

    fetchData();
  }, []); // Make sure to include dependencies if needed

  const average = (array) => {
    console.log(array)
    if (array === undefined){
      return 0;
    }
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

    if (denominator === 0) {
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
    let scores = {}

    var userArray = [happyValue, sadValue, energyValue, calmnessValue, danceabilityValue];
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].split(",\"");
      currentSong = data[i][0];
      var currentSongArray = [average(data[i][1]), average(data[i][2]), average(data[i][3]), average(data[i][4]), average(data[i][5])];
      currentScore = cs(userArray, currentSongArray);
      scores[currentSong] = currentScore;
      if (currentScore > highScore) {
        highScore = currentScore;
        highSong = currentSong;
      }

    }
    // Convert object to an array of key-value pairs
    const entries = Object.entries(scores);

    // Sort the array based on numeric values (descending order)
    entries.sort((a, b) => b[1] - a[1]);

    // Reconstruct an object from the sorted array
    const sortedScores = Object.fromEntries(entries);
    return sortedScores;
  }

  const handleSubmit = async (happyValue, sadValue, energyValue, calmnessValue, danceabilityValue) => {
    try {
      var data = await readCSV();
      var result = await calculateResult( happyValue, sadValue, energyValue, calmnessValue, danceabilityValue, data);   
      // Perform your logic to get song details based on sliders' values
      const songDetails = await searchSpotify(Object.keys(result)[0]);
      const message = `${Object.keys(result)[0]},"[${happyValue}]","[${sadValue}]","[${energyValue}]","[${calmnessValue}]","[${danceabilityValue}]"\n`;

      // Update state with song details
      setSong(songDetails);
      setSongList(result);
      setMood(message);
      // Navigate to the new page
      navigate('/songDetails'); // Change here
    } catch (error) {
      console.error('Error fetching song:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ marginTop:'20px'}}>Vibify</p>
      </header>
      <Link to="/addSong" className="btn btn-success addButton">
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
          <path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
        </svg>
        Add Song
      </Link>
      <p className="h2">What's your vibe?</p>
      <Sliders buttonName="LET'S VIBE" handleSubmit={handleSubmit} height="70.69"/>
      <Login />
    </div>
  );
}

export default App;
