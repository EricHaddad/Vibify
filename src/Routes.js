import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import AddSong from './addSong';
import SongDetails from './components/SongDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/addSong" element={<AddSong />} />
      <Route path="/" element={<App />} />
      <Route path="/songDetails" element={<SongDetails song={Helo} />} />
    </Routes>
  );
};

export default AppRoutes;
