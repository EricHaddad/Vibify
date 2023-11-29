import React from 'react'
const clientId = 'a525da76dbe04bad9f40bc4955eafcc1';
  const CLIENT_SECRET = 'd605b942aa6e45ab988646d5d9b7e0fc';
  const redirectUri = 'http://localhost:4000/callback';
  const scopes = 'user-read-email user-read-private streaming'; // Specify required scopes

  
//= `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
  

 const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export default function Login() {
  return (
    <div className="position-absolute top-0 start-0" style={{ marginTop: '10px', marginLeft: '10px'}}>
      <a className="btn btn-success btn-lg d-flex align-items-center" href={AUTH_URL}>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-33.4974 -55.829 290.3108 334.974" className="me-2">
          <path d="M177.707 98.987c-35.992-21.375-95.36-23.34-129.719-12.912-5.519 1.674-11.353-1.44-13.024-6.958-1.672-5.521 1.439-11.352 6.96-13.029 39.443-11.972 105.008-9.66 146.443 14.936 4.964 2.947 6.59 9.356 3.649 14.31-2.944 4.963-9.359 6.6-14.31 3.653m-1.178 31.658c-2.525 4.098-7.883 5.383-11.975 2.867-30.005-18.444-75.762-23.788-111.262-13.012-4.603 1.39-9.466-1.204-10.864-5.8a8.717 8.717 0 015.805-10.856c40.553-12.307 90.968-6.347 125.432 14.833 4.092 2.52 5.38 7.88 2.864 11.968m-13.663 30.404a6.954 6.954 0 01-9.569 2.316c-26.22-16.025-59.223-19.644-98.09-10.766a6.955 6.955 0 01-8.331-5.232 6.95 6.95 0 015.233-8.334c42.533-9.722 79.017-5.538 108.448 12.446a6.96 6.96 0 012.31 9.57M111.656 0C49.992 0 0 49.99 0 111.656c0 61.672 49.992 111.66 111.657 111.66 61.668 0 111.659-49.988 111.659-111.66C223.316 49.991 173.326 0 111.657 0" fill="#191414"/>
        </svg>
        Login With Spotify
      </a>
    </div>
  )
}
