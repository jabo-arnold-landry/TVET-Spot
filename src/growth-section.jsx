import TabComponent from "./Components/competition";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import MyGrowthSection from "./pages/MyGrowthSection";
function Growth() {
  return (
    <>
      <Navbar />
      <Welcome />
      <div className="grid grid-cols-1 px-2 gap-1 md:grid-cols-3 md:gap-4">
        <div className="col-span-2">
          <TabComponent />
        </div>
        <div className="">
          <MyGrowthSection />
        </div>
      </div>
    </>
  );
}
export default Growth;
