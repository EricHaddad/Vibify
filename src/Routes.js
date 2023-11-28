// Routes.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AddSong from './addSong';
import SongDetails from './songDetails'; // Adjust the path accordingly

const AppRoutes = () => {
  const [song, setSong] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [moodState, setMoodState] = useState("");

  return (
    <Routes>
      <Route path="/addSong" element={<AddSong />} />
      <Route path="/" element={<App setSong={setSong} setMood={setMoodState} setToken={setAccessToken}/>} />
      <Route path="/songDetails" element={<SongDetails song={song} mood={moodState} accessToken={accessToken}/>} />
    </Routes>
  );
};

export default AppRoutes;
