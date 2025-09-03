import ImpactCard from "./Components/Impact";
import RecentActivity from "./Components/RecentActivity";
import CurriculumSuggestion from "./Components/curriculum";

function App() {
 return (
    <div className="flex justify-end p-5">
    
      <div className="w-full sm:w-1/2 lg:w-1/3">
      <ImpactCard />
        <RecentActivity />
        < CurriculumSuggestion/>
      </div>
    </div>
  );
};


export default App;
