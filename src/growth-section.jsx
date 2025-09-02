import TabComponent from "./competition";
import MyGrowthSection from "./pages/MyGrowthSection";
function Growth() {
  return (
    <div className="grid grid-cols-1 px-2 gap-1 md:grid-cols-3 gap-4">
      <div className="col-span-2">
        <TabComponent />
      </div>
      <div className="">
        <MyGrowthSection />
      </div>
    </div>
  );
}
export default Growth;
