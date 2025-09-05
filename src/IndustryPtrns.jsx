import ImpactCard from "./Components/Impact";
import RecentActivity from "./Components/RecentActivity";
import CurriculumSuggestion from "./Components/curriculum";
import TopTalentSection from "./topTalent";
import CreateNewHackathon from "./HackthonCreation";
import Navbar from "./Components/Navbar";
const IndustryPage = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900">
          Industry Partnership
        </h1>
        <p className="mt-2 text-blue-900">
          Discover Talents And Create A Meaningful |Opportunities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="md:col-span-2 space-y-4">
          <TopTalentSection />
          <CreateNewHackathon />
        </div>
        <div>
          <ImpactCard />
          <RecentActivity />
          <CurriculumSuggestion />
        </div>
      </div>
    </>
  );
};
export default IndustryPage;
