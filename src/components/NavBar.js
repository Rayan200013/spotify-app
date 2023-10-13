import React from "react";
import { Link } from "react-router-dom";
import spotifyLogo from "../images/Spotify-Logo.png";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand">
            <img
              src={spotifyLogo}
              alt="spotify Logo Loading"
              style={{ width: "100px" }}
              className="logo-style"
            />
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="d-flex navbar-spotify"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
