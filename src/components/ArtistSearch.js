import React, { useState, useEffect } from "react";
import "../css/artistsearch.css"; // Create a CSS file for your component styles
import AlbumsList from "../components/AlbumList"; // Import the AlbumsList component

const ArtistSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); // Delay the search by 500 milliseconds after the user stops typing.

    return () => {
      clearTimeout(timer); // Clear the timer on unmount or when searchQuery changes.
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedSearchQuery) {
      handleSearch();
    }
  }, [debouncedSearchQuery]);

  const handleSearch = async () => {
    try {
      // Replace 'YOUR_ACCESS_TOKEN' with your actual Spotify API access token
      const accessToken =
        "BQDNh7tEmadz89-wCsGznroFlXAb9CKmHtWgPl1Ej_Ds17Vu3zHwE9-JQDGpl1cTm48twfEpyukwEcqZAXPkmCBAY--Thpjoq065ucSstIMky9AEBLpmMcYybw7y7CIHU1U30-8RD5-YwCK9DsggCp9tquM3ohcZ0wvyKiHKVeqR5aU4TdRpxHHEOjAZtpbTucWLB98Jq_QRnCetCjLXoslAj3JKKhHeHfNxI4Aj1uU02HgLopyA9mJIedvg6kWXRcA2l8-nIWFyOH8LlNiArvcD";

      console.log("Search Query:", debouncedSearchQuery); // Check the search query

      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${debouncedSearchQuery}&type=artist`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Response Status:", response.status); // Check the response status

      if (response.ok) {
        const data = await response.json();
        console.log("Data from Spotify:", data); // Check the data received from Spotify
        const artists = data.artists.items;
        setSearchResults(artists);
      } else {
        // Handle errors
        console.error("Error searching for artists");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="artist-search">
      <h1>Artist Search</h1>
      <div className="search-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Search for an artist..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="button-transparent">
            <i className="fa fa-search search-icon"></i>
          </button>
        </div>
      </div>

      {/* Render search results as cards using the AlbumsList component */}
      <div className="search-results">
        {searchResults.map((artist) => (
          <AlbumsList key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistSearch;
