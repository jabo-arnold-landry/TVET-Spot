import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ChallengesSection from "./stud-challenges.jsx";
import TabComponent from "./competition.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <TabComponent />
  </StrictMode>
);
