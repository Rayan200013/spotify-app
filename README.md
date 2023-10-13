# Spotify Artist Search App

This is a simple React-based web application that allows users to search for artists on Spotify, view artist details, and explore their albums. It integrates with the Spotify API to fetch artist and album information.

## Features

- **Login with Spotify:** The app starts with a landing page containing a "Login with Spotify" button. Upon successful authentication, the user is redirected to the Artist Search page.

- **Artist Search:** Users can search for artists using the search input. The app supports "search-as-you-type" functionality. Results are displayed in a clean and consistent UI.

- **Browsing Artists:** Search results display artist images, popularity as star ratings, the number of followers, and can be clicked to view the artist's albums.

- **Browsing Artist Albums:** Users can view albums for a selected artist. Album details include the cover image, album name, list of artists, release year, total number of tracks, and a clickable link to open a new tab for a Spotify preview.

- **Responsive Design:** The application is responsive, adapting seamlessly to different devices.

## Technical Details

- **Single-Page Application:** The app is built as a single-page application using React.

- **Styling:** It uses Bootstrap for the design of the application.

## Project Structure

- `src/components`: Contains React components used in the application, including `AlbumList.js`, `ArtistDetail.js`, `ArtistSearch.js`, `HomePage.js`, `LoginPage.js`, and `NavBar.js`.

- `src/css`: Includes CSS files for styling components, such as `artistSearch.css`, `loginPage.css`, and `NavBar.css`.

- `src/App.js`: The main entry point for the React application that defines the routes and components.

## Getting Started

1. Clone this repository.
2. Install the required dependencies with `npm install`.
3. Run the application locally with `npm start`.

## Spotify API

This app uses the Spotify API to retrieve artist and album information. To run the application, you'll need to provide your Spotify API access token by replacing `"YOUR_ACCESS_TOKEN"` in the code with your actual access token.

## Explanation

### Spotify API

This application integrates with the Spotify API to search for artists and retrieve information about their albums. To use the Spotify API, I followed these steps:

1. **Spotify Account:** I created a Spotify account and logged in.

2. **Spotify Developer Dashboard:** I navigated to the Spotify Developer Dashboard (https://developer.spotify.com/dashboard/) and created a new Spotify application. This provided me with a `clientId` and `clientSecret`.

3. **Redirect URIs:** I specified the following redirect URIs in my Spotify application settings. These URIs allow my application to authenticate with Spotify, and I tested them both locally and on a Netlify-hosted subdomain.

   - http://localhost:3000/
   - https://spotifyreactapp.netlify.app/
   - http://localhost:3000/artist-search

4. **Access Token:** I used the Implicit Grant Flow for Spotify to obtain an access token. After successful authentication, the user is redirected to the "Artist Search" page.

5. **Access Token Validity:** It's essential to note that the access token obtained through the Implicit Grant Flow is valid for 1 hour (3600 seconds). After this time, the token expires, and you need to request a new one. Proper token management is crucial in a real-world application.

### Asynchronous Functions

In the code, I used asynchronous functions to handle data fetching and API calls. Here's why it's important:

- **Non-blocking:** Asynchronous functions do not block the main thread, allowing the application to remain responsive. This is particularly important when making network requests to the Spotify API.

- **Fetching Data:** The application fetches data from external sources (Spotify API) which can take time. Asynchronous functions ensure that the application can continue performing other tasks while waiting for the data.

- **Error Handling:** Asynchronous functions help with handling errors from API requests and provide a more responsive user experience.

By using asynchronous functions, the application efficiently communicates with the Spotify API and handles data seamlessly.

## Getting Started

To run the application:

1. Clone this repository.

2. Install the required dependencies with `npm install`.

3. Replace `"YOUR_ACCESS_TOKEN"` with your actual Spotify API access token in the code.

4. Run the application locally with `npm start`.

## Conclusion

This section provides insights into how I integrated the Spotify API into the application and the importance of using asynchronous functions in data fetching.
