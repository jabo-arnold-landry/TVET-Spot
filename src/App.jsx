
import React from 'react';
import Navbar from './components/Navbar';
import Welcome  from './components/Welcome';
import MyGrowthSection from "./pages/MyGrowthSection";  
import TabComponent from "./competition.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Welcome /> 
      <MyGrowthSection />
      <TabComponent />
    </>
  );
}

export default App;
