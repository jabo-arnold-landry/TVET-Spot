import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const TopTalentSection = () => {
  const [selectedField, setSelectedField] = useState("All Fields");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const fields = [
    "All Fields",
    "Engineering",
    "Healthcare",
    "Business",
    "Technology",
    "Education",
    "Agriculture",
    "Tourism",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectField = (field) => {
    setSelectedField(field);
    setIsDropdownOpen(false);
  };

  // Sample data for the rankings table (expanded to show scrolling)
  const sampleStudents = [
    {
      rank: 1,
      initials: "SM",
      name: "Sarah Miller",
      field: "Engineering",
      fieldColor: "bg-blue-600",
      points: 1756,
      badge: "⭐",
      badgeColor: "bg-yellow-500",
    },
    {
      rank: 2,
      initials: "DW",
      name: "David Wilson",
      field: "IT & Software",
      fieldColor: "bg-blue-700",
      points: 1634,
      badge: "○",
      badgeColor: "bg-gray-400",
    },
    {
      rank: 3,
      initials: "MJ",
      name: "Maria Johnson",
      field: "Mechatronics",
      fieldColor: "bg-green-600",
      points: 1520,
      badge: "○",
      badgeColor: "bg-gray-400",
    },
    {
      rank: 4,
      initials: "AK",
      name: "Alex Kumar",
      field: "Robotics",
      fieldColor: "bg-purple-600",
      points: 1456,
      badge: "○",
      badgeColor: "bg-gray-400",
    },
    {
      rank: 5,
      initials: "LT",
      name: "Lisa Thompson",
      field: "Fashion",
      fieldColor: "bg-pink-600",
      points: 1398,
      badge: "○",
      badgeColor: "bg-gray-400",
    },
    {
      rank: 6,
      initials: "JM",
      name: "James Martinez",
      field: "Engineering",
      fieldColor: "bg-blue-600",
      points: 1342,
      badge: "○",
      badgeColor: "bg-gray-400",
    },
    {
      rank: 7,
      initials: "RB",
      name: "Rachel Brown",
      field: "Biomedical",
      fieldColor: "bg-green-600",
      points: 1285,
      badge: "○",
      badgeColor: "bg-gray-400",
    },
    {
      rank: 8,
      initials: "MK",
      name: "Mike Kim",
      field: "Technology",
      fieldColor: "bg-indigo-600",
      points: 1234,
      badge: "○",
      badgeColor: "bg-gray-400",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-h-[250px] overflow-y-auto ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 ">
        <h2 className="text-xl font-semibold text-gray-900">Top Talent</h2>

        {/* Field Selector Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 min-w-[120px]"
          >
            <span>{selectedField}</span>
            <ChevronDown
              className={`ml-2 h-4 w-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {fields.map((field) => (
                <button
                  key={field}
                  onClick={() => selectField(field)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-md last:rounded-b-md ${
                    selectedField === field
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700"
                  }`}
                >
                  {field}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Rankings Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 sticky">
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">
                Rank
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">
                Student
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">
                Field
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">
                Points
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">
                Badge
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleStudents.map((student, index) => (
              <tr
                key={student.rank}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-2 text-sm font-medium text-gray-900">
                  {student.rank}
                </td>
                <td className="py-4 px-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-medium mr-3">
                      {student.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {student.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${student.fieldColor}`}
                  >
                    {student.field}
                  </span>
                </td>
                <td className="py-4 px-2 text-sm text-gray-900 font-medium">
                  {student.points.toLocaleString()}
                </td>
                <td className="py-4 px-2">
                  <div
                    className={`w-6 h-6 rounded-full ${student.badgeColor} flex items-center justify-center text-white text-xs`}
                  >
                    {student.badge}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopTalentSection;
