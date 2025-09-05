import React, { useState } from "react";
const Leaderboard = () => {
  const [activeFilter, setActiveFilter] = useState("All Fields");
  const [activeScope, setActiveScope] = useState("Global");

  // Mock data - would come from API in real implementation
  const topThree = [
    {
      rank: 2,
      name: "Maria Santos",
      points: "2,145 points",
      initials: "MS",
      color: "bg-gray-400",
    },
    {
      rank: 1,
      name: "John Doe",
      points: "2,847 points",
      initials: "JD",
      color: "bg-yellow-500",
    },
    {
      rank: 3,
      name: "Alex Johnson",
      points: "1,923 points",
      initials: "AJ",
      color: "bg-orange-500",
    },
  ];

  const fullRankings = [
    {
      rank: 4,
      name: "Sarah Miller",
      field: "Engineering",
      fieldColor: "bg-blue-500",
      points: 1756,
      badge: "bg-yellow-500",
      challenges: 28,
      initials: "SM",
      avatarColor: "bg-green-500",
    },
    {
      rank: 5,
      name: "David Wilson",
      field: "IT & Software",
      fieldColor: "bg-blue-600",
      points: 1634,
      badge: "bg-gray-300",
      challenges: 26,
      initials: "DW",
      avatarColor: "bg-green-600",
    },
  ];

  const podiumHeights = {
    1: "h-24 bg-yellow-500",
    2: "h-16 bg-gray-400",
    3: "h-20 bg-orange-500",
  };

  const podiumOrder = [topThree[0], topThree[1], topThree[2]]; // 2nd, 1st, 3rd

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Leaderboard
                </h1>
                <p className="text-gray-600 text-sm lg:text-base">
                  See how you stack up against your peers
                </p>
              </div>

              {/* Filters */}
              <div className="flex gap-2 flex-wrap">
                <select
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option>All Fields</option>
                  <option>Engineering</option>
                  <option>IT & Software</option>
                  <option>Healthcare</option>
                </select>

                <select
                  value={activeScope}
                  onChange={(e) => setActiveScope(e.target.value)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option>Global</option>
                  <option>Local</option>
                  <option>Regional</option>
                </select>
              </div>
            </div>
          </div>

          {/* Podium Section */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-200 mb-8">
            <div className="flex justify-center items-end gap-4 lg:gap-8 mb-8">
              {podiumOrder.map((person, index) => (
                <div key={person.rank} className="flex flex-col items-center">
                  {/* Avatar */}
                  <div
                    className={`w-12 h-12 lg:w-16 lg:h-16 ${person.color} rounded-full flex items-center justify-center mb-3 lg:mb-4`}
                  >
                    <span className="text-white font-bold text-sm lg:text-lg">
                      {person.initials}
                    </span>
                  </div>

                  {/* Name and Points */}
                  <div className="text-center mb-3 lg:mb-4">
                    <p className="font-semibold text-gray-900 text-sm lg:text-base">
                      {person.name}
                    </p>
                    <p className="text-gray-600 text-xs lg:text-sm">
                      {person.points}
                    </p>
                  </div>

                  {/* Podium */}
                  <div
                    className={`w-16 lg:w-20 ${
                      podiumHeights[person.rank]
                    } rounded-t-lg flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-lg lg:text-2xl">
                      {person.rank}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Rankings Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="p-4 lg:p-6 border-b border-gray-200">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900">
                Full Rankings
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Field
                    </th>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Points
                    </th>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Badge
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {fullRankings.map((student, index) => (
                    <tr
                      key={student.rank}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-3 sm:px-4 lg:px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">
                          {student.rank}
                        </span>
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div
                            className={`w-8 h-8 lg:w-10 lg:h-10 ${student.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}
                          >
                            <span className="text-white font-bold text-xs lg:text-sm">
                              {student.initials}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {student.name}
                            </p>
                            <div className="sm:hidden">
                              <span
                                className={`inline-flex px-2 py-0.5 text-xs font-medium text-white rounded-full ${student.fieldColor} mt-1`}
                              >
                                {student.field}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium text-white rounded-full ${student.fieldColor}`}
                        >
                          {student.field}
                        </span>
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-4 whitespace-nowrap">
                        <div>
                          <span className="text-sm font-medium text-gray-900">
                            {student.points.toLocaleString()}
                          </span>
                          <div className="text-xs text-gray-500 sm:hidden">
                            {student.challenges} challenges
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-4 whitespace-nowrap">
                        <div
                          className={`w-4 h-4 lg:w-6 lg:h-6 ${student.badge} rounded-full`}
                        ></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
