import React from "react";
import "../css/loginpage.css";

const SPOTIFY_CLIENT_ID = "43c6fcbf984e412ca043a5c8c290a9f3"; // Your Spotify Client ID
const REDIRECT_URI = "https://spotifyreactapp.netlify.app/artist-search"; // Use the correct URI

const LoginPage = () => {
  const handleSpotifyLogin = () => {
    const spotifyAuthURL = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=user-library-read`;

    window.location.href = spotifyAuthURL;
  };

  return (
    <div className="spotify-loginPage">
      <h1>Login with Spotify</h1>
      <div className="container mt-5">
        <button onClick={handleSpotifyLogin}>
          <span>Login</span>
          <i className="fab fa-spotify"></i>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
