// spotifyApi.js
const SPOTIFY_API_URL = 'https://api.spotify.com/v1/search';
const SEARCH_TYPE = 'track';

export const getSpotifyAccessToken = async () => {
    const CLIENT_ID = 'your_client_id';
    const CLIENT_SECRET = 'your_client_secret';
  
    // Encode client ID and client secret for basic authentication
    const base64Credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${base64Credentials}`,
    };
  
    const body = new URLSearchParams({
      grant_type: 'client_credentials',
    });
  
    try {
      const response = await fetch(SPOTIFY_API_URL, {
        method: 'POST',
        headers,
        body,
      });
  
      if (!response.ok) {
        throw new Error('Failed to obtain Spotify access token');
      }
  
      const data = await response.json();
      const accessToken = data.access_token;
  
      return accessToken;
    } catch (error) {
      console.error('Error obtaining Spotify access token:', error);
      throw error;
    }
  };

export const searchSpotify = async (query) => {
  const accessToken = await getSpotifyAccessToken();

  const response = await fetch(`${SPOTIFY_API_URL}?type=${SEARCH_TYPE}&q=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch song from Spotify API');
  }

  const data = await response.json();
  // Extract the relevant song information from the response data
  const song = data.tracks.items[0]; // Adjust as needed based on the structure of the response

  return song;
};
