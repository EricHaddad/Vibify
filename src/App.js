import './App.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory
import Sliders from './components/sliders';
import { searchSpotify } from './path/to/spotifyApi'; // Adjust the path accordingly

function App() {
  const history = useHistory();
  const [song, setSong] = useState(null);

  const handleSubmit = async (happyValue, sadValue, energyValue, calmnessValue, danceabilityValue) => {
    try {
      // Perform your logic to get song details based on sliders' values
      const query = 'Your search query here';
      const songDetails = await searchSpotify(query);

      // Update state with song details
      setSong(songDetails);

      // Navigate to the new page
      history.push('/songDetails');
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
