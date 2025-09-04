import ImpactCard from "./Components/Impact";
import RecentActivity from "./Components/RecentActivity";
import CurriculumSuggestion from "./Components/curriculum";

import TopTalentSection from "./topTalent";
import CreateNewHackathon from "./HackthonCreation";
import IndustryPage from "./IndustryPtrns";
function App() {
 return (
    <div className="flex justify-end p-5">
    
      <div className="w-full sm:w-1/2 lg:w-1/3">
      <ImpactCard />
        <RecentActivity />
        < CurriculumSuggestion/>
      </div>
    </div>
  return (
    <>
      <IndustryPage />
      <TopTalentSection />
      <CreateNewHackathon />
    </>
  );
};


export default App;
