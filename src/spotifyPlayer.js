import React from 'react';
import { useSpotifyPlayer } from 'react-spotify-web-playback-sdk';

const SpotifyPlayerComponent = ({ accessToken, trackUri }) => {
  return (
    <useSpotifyPlayer
      token={accessToken}
      uris={trackUri ? [trackUri] : []}
      autoPlay={true}
    />
  );
};

export default SpotifyPlayerComponent;
