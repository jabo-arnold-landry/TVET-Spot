import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Growth from "./growth-section";
import Profile from "./pages/Profile";
import Dashboard from "./Components/Dashboard";
import Leaderboard from "./components/Leaderboard"; // Import your Leaderboard component

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Main page route */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Welcome />
                <Growth />
              </>
            }
          />
          {/* Leaderboard route */}
          <Route
            path="/leaderboard"
            element={
              <>
                <Navbar />
                <Leaderboard />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
