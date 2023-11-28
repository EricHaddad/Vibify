import React from 'react'
const clientId = 'a525da76dbe04bad9f40bc4955eafcc1';
  const CLIENT_SECRET = 'd605b942aa6e45ab988646d5d9b7e0fc';
  const redirectUri = 'http://localhost:4000/callback';
  const scopes = 'user-read-email user-read-private streaming'; // Specify required scopes

  
//= `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
  

 const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export default function Login() {
  return (
    <div className="position-absolute top-0 start-0">
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  )
}
