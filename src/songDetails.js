import React from 'react';

const SongDetails = ({ song }) => {
    if (!song) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <img src={song.image} alt="Song Cover" />
        <h2>{song.name}</h2>
        <p>Artist: {song.artist}</p>
      </div>
    );
  };

export default SongDetails;