import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=9d53bb9157d64f13bc76f0f456304b53&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <div className="position-absolute top-0 start-0">
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  )
}
