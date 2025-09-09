import TVETSpotLanding from "./Landing";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./Components/Dashboard";
import Leaderboard from "./components/Leaderboard"; // Import your Leaderboard component
import Profile from "./pages/Profile"; // Import Profile component if needed
import MyContextProvider from "./ContextProvider";
import IndustryPage from "./IndustryPtrns";
import Growth from "./growth-section";

function App() {
  return (
    <>
      <Router>
        <MyContextProvider>
          <Routes>
            {/* Main page route */}
            <Route path="/" element={<TVETSpotLanding />} />
            <Route path="student-section" element={<Growth />} />
            <Route path="tvet-section" element={<Dashboard />} />
            <Route path="private-section" element={<IndustryPage />} />
            <Route path="leader-board" element={<Leaderboard />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </MyContextProvider>
      </Router>
    </>
  );
}

export default App;
