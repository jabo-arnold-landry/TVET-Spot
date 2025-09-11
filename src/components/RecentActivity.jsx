import React from "react";

// ✅ Mock data for Recent Activity
const mockRecentActivities = [
  {
    title: "New submission received",
    description: '"Smart Home IoT System"',
    time: "2 hours ago",
  },
  {
    title: "Challenge deadline approaching",
    description: '"Healthcare Analytics"',
    time: "3 days left",
  },
  {
    title: "Student invited to apply",
    description: "John Doe • Software Engineer position",
    time: "",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {mockRecentActivities.map((activity, index) => (
          <div key={index} className="text-black">
            <p className="font-medium">{activity.title}</p>
            <p className="text-sm text-sky-800">
              {activity.description} {activity.time && `• ${activity.time}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
