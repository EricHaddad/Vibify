import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import AddSong from './addSong';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/addSong" element={<AddSong/>}/>
        <Route path="/" element={<App />} />
    </Routes>
  );
};

export default AppRoutes;
