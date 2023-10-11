import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand">Spotify</Link>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="d-flex" aria-current="page" to="/artist-search">
                search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
