import React from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dating from "./Components/Dating"; // Import the Dating component
import ProfileCard from "./Components/ProfileCard"; // Import the ProfileCard component

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the dating page */}
        <Route path="/dating" element={<Dating />} />

        {/* Route for the profile card */}
        <Route path="/profile" element={<ProfileCard />} />

        {/* Default route (for chat functionality) */}
        <Route path="/" element={<MainContainer />} />
      </Routes>
    </Router>
  );
}

export default App;



