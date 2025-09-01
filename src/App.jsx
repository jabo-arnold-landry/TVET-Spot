
import React from 'react';
import Navbar from './components/Navbar';
import Welcome  from './components/Welcome';
import MyGrowthSection from "./pages/MyGrowthSection";  
function App() {
  return (
    <>
      <Navbar />
      <Welcome /> 
      <MyGrowthSection />
    </>
  );
}

export default App;
