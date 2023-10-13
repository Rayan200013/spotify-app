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
    }, 500); // to make a small delay when users are seacrhing

    return () => {
      clearTimeout(timer); 
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedSearchQuery) {
      handleSearch();
    }
  }, [debouncedSearchQuery]);

  const handleSearch = async () => {
    try {
      const accessToken =
        "BQAW_CTejsl30fYSVLDw8plUNt6Gu18_2IpQNUsUgXTAqA3AZz_i2aTHzWAWUpp2T1nn_WaZkZpgpXcyhvijXou2RWgGBgal76Jbues3hQCjonHjMdj_KDZzTiMVX2wTRCcB6aVHSCzzUSOcIAjwXrwzYaU7SlHarzwwBD0KCmGleIxP9Wfr_EQtjlxJnn-ilTv3B8INQ4SkKHYceCrpA77mwV5TMndx63nSgbNsw8VheFrjNSDyO4uczlzoyjb92zaQKAKoCiMa1owM-j5KAeCe";
      console.log("Search Query:", debouncedSearchQuery); 

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
      <h2>Spotify Artist Search</h2>
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
