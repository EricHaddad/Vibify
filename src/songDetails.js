import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import SpotifyPlayer from 'react-spotify-web-playback';
import { searchSpotify } from './spotifyAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpOutline, faThumbsDown as faThumbsDownOutline } from '@fortawesome/free-regular-svg-icons';

const SongDetails = ({ song, accessToken, mood, songList, setSong }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [isHoveredLike, setIsHoveredLike] = useState(false);
  const [isHoveredDislike, setIsHoveredDislike] = useState(false);
  const [currSongNum, setSongNum] = useState(0);



  if (!song) {
    return <p>Loading...</p>;
  }

  const loadNextSong = async () =>{
    console.log(currSongNum)
    console.log(Object.keys(songList).length - 1)
    console.log(currSongNum === Object.keys(songList).length - 2)
    if(currSongNum === Object.keys(songList).length - 2){
      alert("There are no more songs matching your vibe")
      return;
    }
    let nextSong = await searchSpotify(Object.keys(songList)[1 + currSongNum]);
    setSong(nextSong);
    setSongNum(1 + currSongNum);
    setDisliked(false);
    setLiked(false);
    setIsHoveredLike(false);
    setIsHoveredDislike(false);
  }

  const handleLike = async () => {
    setLiked(!liked);
    setDisliked(false);
    setIsHoveredLike(false);
    setIsHoveredDislike(false);
    try {
      const response = await fetch('http://localhost:4000/edit-file/Vibify_Database.csv', {
          method: 'POST',
          body: mood,
          headers: {
              'Content-Type': 'text/plain',
          },
      });

      if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
    loadNextSong();
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    setLiked(false);
    setIsHoveredLike(false);
    setIsHoveredDislike(false);
    console.log(`accessToken: ${accessToken}`)
    loadNextSong();
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
      <div style={{width: "50vw", height: "100px", backgroundColor:"transparent"}}>
        <SpotifyPlayer
          token={accessToken}
          uris={[song.uri]} // Pass the song URI as an array to uris
          autoPlay={true} // Adjust settings as needed
          styles={{
            // Customize player styles if required
            bgColor: 'purple',
            color: 'white',
            sliderColor: 'green',
          }}
        />
      </div>
      {/* Like and Dislike Buttons */}
      <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'center' }}>
        {/* Link to the main page */}
        <Link to="/" style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '18px', color: 'white' }}>
          Back to Main Page
        </Link>

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
