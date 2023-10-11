import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../components/api";

const ArtistSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    // Implement artist search logic using the Spotify API
    // Update searchResults state with the fetched data
  };

  return (
    <div>
      <h1>Artist Search</h1>
      <input
        type="text"
        placeholder="Search for an artist..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handleSearch()}
      />
      {/* Render search results */}
    </div>
  );
};

export default ArtistSearch;
