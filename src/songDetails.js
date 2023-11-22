import React, { useState } from 'react';
import SpotifyPlayerComponent from './spotifyPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpOutline, faThumbsDown as faThumbsDownOutline } from '@fortawesome/free-regular-svg-icons';

const SongDetails = ({ song, accessToken }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [isHoveredLike, setIsHoveredLike] = useState(false);
  const [isHoveredDislike, setIsHoveredDislike] = useState(false);

  if (!song) {
    return <p>Loading...</p>;
  }

  const handleLike = () => {
    setLiked(!liked);
    setDisliked(false);
    setIsHoveredLike(false);
    setIsHoveredDislike(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    setLiked(false);
    setIsHoveredLike(false);
    setIsHoveredDislike(false);
  };

  const hasAlbumImages = song.album && song.album.images && song.album.images.length > 0;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {hasAlbumImages && (
        <div style={{ marginBottom: '5px', marginTop: '200px' }}>
          <img
            src={song.album.images[0].url}
            alt="Song Cover"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>
      )}
      <h1 style={{ margin: '5px 0 1px', color: 'white' }}>{song.name}</h1>
      <h3 style={{ margin: '5px 0', color: 'white' }}>{song.artists[0].name}</h3>
      <SpotifyPlayerComponent accessToken={accessToken} trackUri={song.uri} />

      {/* Like and Dislike Buttons */}
      <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={handleLike}
          onMouseEnter={() => setIsHoveredLike(true)}
          onMouseLeave={() => setIsHoveredLike(false)}
          disabled={disliked}
          style={{
            background: 'transparent',
            border: 'none',
            margin: '0 20px',
            fontSize: '24px',
            opacity: liked ? 1 : isHoveredLike ? 0.6 : 1,
          }}
        >
          <FontAwesomeIcon
            icon={liked ? faThumbsUp : isHoveredLike ? faThumbsUp : faThumbsUpOutline}
            style={{ color: liked ? "#ffffff" : isHoveredLike ? "#ffffff" : "#808080" }}
          />
        </button>
        <button
          onClick={handleDislike}
          onMouseEnter={() => setIsHoveredDislike(true)}
          onMouseLeave={() => setIsHoveredDislike(false)}
          disabled={liked}
          style={{
            background: 'transparent',
            border: 'none',
            margin: '0 20px',
            fontSize: '24px',
            opacity: disliked ? 1 : isHoveredDislike ? 0.4 : 1,
          }}
        >
          <FontAwesomeIcon
            icon={disliked ? faThumbsDown : isHoveredDislike ? faThumbsDown : faThumbsDownOutline}
            style={{ color: disliked ? "#ffffff" : isHoveredDislike ? "#ffffff" : "#808080" }}
          />
        </button>
      </div>
    </div>
  );
};

export default SongDetails;
