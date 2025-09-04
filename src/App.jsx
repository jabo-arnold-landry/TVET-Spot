import React from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Growth from "./growth-section";
import Dashboard from "./Components/Dashboard";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Growth />
      <Leaderboard />
    </>
  );
}

export default App;
