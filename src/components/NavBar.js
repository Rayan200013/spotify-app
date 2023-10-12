import React from "react";
import { Link } from "react-router-dom";
import spotifyLogo from "../images/Spotify-Logo.png";

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
              <Link className="d-flex" aria-current="page" to="/">
                login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
