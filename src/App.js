import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar"; // Correct import
// import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import ArtistSearch from "./components/ArtistSearch";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/artist-search" component={<ArtistSearch />} />
      </Routes>
    </>
  );
}

export default App;
