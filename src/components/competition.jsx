import React, { useState } from "react";
import ChallengeSection from "../stud-challenges";
import HackathonsSection from "../stud-hackathon";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("A");

  return (
    <div className="w-full  mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Tab Headers */}
        <div className="flex">
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
              activeTab === "A"
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("A")}
          >
            Challenges
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
              activeTab === "B"
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("B")}
          >
            Hackathons
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px] p-4">
          {activeTab === "A" ? <ChallengeSection /> : <HackathonsSection />}
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
