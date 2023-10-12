import React from "react";
import "../css/loginpage.css";

const SPOTIFY_CLIENT_ID = "43c6fcbf984e412ca043a5c8c290a9f3"; // Your Spotify Client ID
const REDIRECT_URI = "http://localhost:3000/artist-search";
const AUTH_EXPIRATION_DURATION = 60000; // 1 minute in milliseconds

let lastAuthenticationTime = 0;

const handleSpotifyLogin = () => {
  const currentTime = Date.now();
  const timeSinceLastAuth = currentTime - lastAuthenticationTime;

  if (timeSinceLastAuth >= AUTH_EXPIRATION_DURATION) {
    // Force reauthentication
    const spotifyAuthURL = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=user-library-read`;
    window.location.href = spotifyAuthURL;
  } else {
    // User is already authenticated, perform any other actions here
    // Redirect to the "Search" page or handle as needed
  }
};

// Example: Call this function after a successful login
const updateLastAuthenticationTime = () => {
  lastAuthenticationTime = Date.now();
};

const LoginPage = () => {
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
