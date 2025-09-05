import React from "react";

// ✅ Mock data for ImpactCard
const mockImpactData = {
  challenges: 8,
  students: 142,
  solutions: 89,
  talent: 3,
};

const ImpactCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h2 className="text-lg font-semibold mb-4">Your Impact</h2>
      <div className="space-y-3 text-sky-800">
        <p className="flex justify-between">
          <span>Challenges Created</span>
          <span className="font-bold text-black">{mockImpactData.challenges}</span>
        </p>
        <p className="flex justify-between">
          <span>Students Engaged</span>
          <span className="font-bold text-black">{mockImpactData.students}</span>
        </p>
        <p className="flex justify-between">
          <span>Solutions Received</span>
          <span className="font-bold text-black">{mockImpactData.solutions}</span>
        </p>
        <p className="flex justify-between">
          <span>Talent Hired</span>
          <span className="font-bold text-black">{mockImpactData.talent}</span>
        </p>
      </div>
    </div>
  );
};

export default ImpactCard;
