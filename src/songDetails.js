import React from 'react';
import SpotifyPlayerComponent from './spotifyPlayer';

const SongDetails = ({ song, accessToken }) => {
  if (!song) {
    return <p>Loading...</p>;
  }

  // Check if the song has album images
  const hasAlbumImages = song.album && song.album.images && song.album.images.length > 0;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: 'white' }}>
      {hasAlbumImages && (
        <img
          src={song.album.images[0].url}
          alt="Song Cover"
          style={{ width: '150px', height: '150px'}}
        />
      )}
      <h1 style={{ marginTop: '10px', color: 'white' }}>{song.name}</h1>
      <h3 style={{ color: 'white' }}>{song.artists[0].name}</h3>
      <SpotifyPlayerComponent accessToken={accessToken} trackUri={song.uri} />
    </div>
  );
};

export default SongDetails;
