// LoginPage.js
import React from "react";
import "../css/loginpage.css";
// import { Link } from "react-router-dom";

const SPOTIFY_CLIENT_ID = "43c6fcbf984e412ca043a5c8c290a9f3";
const REDIRECT_URI = "http://localhost:3000/artist-search";

const LoginPage = () => {
  const handleSpotifyLogin = () => {
    const state = Math.random().toString(36).substring(7);

    const spotifyAuthURL = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=user-library-read&state=${state}`;

    sessionStorage.setItem("spotifyAuthState", state);

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
      {/* <Link to="/artist-search">Continue to Artist Search</Link> */}
    </div>
  );
};

export default LoginPage;
