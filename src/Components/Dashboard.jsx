import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  Shield, 
  TrendingUp, 
  Plus, 
  Settings, 
  Eye, 
  BarChart3,
  FileText,
  ExternalLink,
  X,
  Save,
  Calendar,
  Building,
  Award,
  CheckCircle
} from 'lucide-react';

export default function TVETDashboard() {
  const [showCreateChallenge, setShowCreateChallenge] = useState(false);
  const [showCreateSuccessStory, setShowCreateSuccessStory] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showAllSuggestions, setShowAllSuggestions] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: "Smart Home IoT System",
      participants: 23,
      dueDate: "Mar 25, 2024",
      status: "Active",
      sponsor: "TechCorp",
      description: "Build an integrated IoT system for smart home automation"
    },
    {
      id: 2,
      title: "Healthcare Data Analytics",
      participants: 18,
      dueDate: "Apr 1, 2024",
      status: "Active",
      sponsor: "HealthInnovate",
      description: "Develop analytics solutions for healthcare data processing"
    }
  ]);

  const [successStories, setSuccessStories] = useState([
    {
      id: 1,
      title: "Student Hired by TechCorp",
      description: "John Doe landed a Software Engineer role after winning the IoT challenge.",
      date: "Feb 15, 2024"
    },
    {
      id: 2,
      title: "New Partnership Formed",
      description: "HealthInnovate committed to 5 challenges this year.",
      date: "Feb 10, 2024"
    }
  ]);

  const [suggestions] = useState([
    {
      id: 1,
      company: "AgriTech Solutions",
      title: "Precision Farming Challenge",
      description: "Create IoT solutions for agricultural monitoring and automation",
      date: "Feb 20, 2024",
      status: "Pending Review"
    },
    {
      id: 2,
      company: "GreenEnergy Corp",
      title: "Solar Panel Optimization",
      description: "Develop algorithms for optimizing solar panel efficiency",
      date: "Feb 18, 2024",
      status: "Under Discussion"
    }
  ]);

  const [newChallenge, setNewChallenge] = useState({
    title: "",
    description: "",
    dueDate: "",
    sponsor: "",
    maxParticipants: ""
  });

  const [newSuccessStory, setNewSuccessStory] = useState({
    title: "",
    description: "",
    studentName: "",
    company: ""
  });

  const handleCreateChallenge = () => {
    if (newChallenge.title && newChallenge.description) {
      const challenge = {
        id: challenges.length + 1,
        title: newChallenge.title,
        participants: 0,
        dueDate: newChallenge.dueDate,
        status: "Active",
        sponsor: newChallenge.sponsor,
        description: newChallenge.description
      };
      setChallenges([...challenges, challenge]);
      setNewChallenge({ title: "", description: "", dueDate: "", sponsor: "", maxParticipants: "" });
      setShowCreateChallenge(false);
    }
  };

  const handleCreateSuccessStory = () => {
    if (newSuccessStory.title && newSuccessStory.description) {
      const story = {
        id: successStories.length + 1,
        title: newSuccessStory.title,
        description: newSuccessStory.description,
        date: new Date().toLocaleDateString()
      };
      setSuccessStories([...successStories, story]);
      setNewSuccessStory({ title: "", description: "", studentName: "", company: "" });
      setShowCreateSuccessStory(false);
    }
  };

  const ChallengeModal = ({ challenge, onClose }) => (
    <div className="fixed inset-0 bg-black/50  flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-4 sm:p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">Challenge Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={18} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{challenge.title}</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">{challenge.description}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Participants</p>
              <p className="font-semibold text-sm sm:text-base">{challenge.participants}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Due Date</p>
              <p className="font-semibold text-sm sm:text-base">{challenge.dueDate}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Sponsor</p>
              <p className="font-semibold text-sm sm:text-base">{challenge.sponsor}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Status</p>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">{challenge.status}</span>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2 text-sm sm:text-base">Challenge Management</h4>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white p-2 rounded-lg text-sm sm:text-base">Edit Challenge Details</button>
              <button className="w-full bg-black text-white p-2 rounded-lg text-sm sm:text-base">Send Reminder to Participants</button>
              <button className="w-full border border-green-300 text-green-800 p-2 rounded-lg text-sm sm:text-base">Archive Challenge</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">      

      <div className="p-4 sm:p-6">       

        <div className="flex flex-start xl:grid-cols-3 gap-10 sm:gap-8">
          {/* Challenge Management */}
          <div className="xl:col-span-2 ">
            <div className="bg-white rounded-xl shadow-sm border-gray lg:w-200 sm:w-100">
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Challenge Management</h2>
                  <button 
                    onClick={() => setShowCreateChallenge(true)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg font-medium flex items-center space-x-2 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
                  >
                    <Plus size={16} />
                    <span>Create Challenge</span>
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3 space-y-3 lg:space-y-0">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{challenge.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">{challenge.participants} participants • Due: {challenge.dueDate}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => setSelectedChallenge(challenge)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center space-x-1 flex-1 sm:flex-none justify-center"
                        >
                          <Settings size={12} />
                          <span>Manage</span>
                        </button>
                        <button 
                          onClick={() => setSelectedChallenge(challenge)}
                          className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center space-x-1 flex-1 sm:flex-none justify-center"
                        >
                          <Eye size={12} />
                          <span>View</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium w-fit">{challenge.status}</span>
                      <span className="text-xs text-gray-500">Sponsored by {challenge.sponsor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Suggestions */}
            <div className="bg-white rounded-xl shadow-sm border-gray mt-6 sm:mt-8">
              <div className="p-4 sm:p-6 ">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Industry Suggestions</h2>
                  <button 
                    onClick={() => setShowAllSuggestions(true)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View All ({suggestions.length})
                  </button>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                {suggestions.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500 text-sm sm:text-base">No suggestions received yet.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {suggestions.slice(0, 2).map((suggestion) => (
                      <div key={suggestion.id} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-2 space-y-2 sm:space-y-0">
                          <h4 className="font-medium text-gray-900 text-sm sm:text-base">{suggestion.title}</h4>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded w-fit">{suggestion.status}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">{suggestion.description}</p>
                        <p className="text-xs text-gray-500">From {suggestion.company} • {suggestion.date}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 flex flex-col w-full lg:w-800 md:w-400 sm:w-200">
            <div className="bg-white rounded-xl shadow-sm border-gray lg:w-90">
              <div className="p-4 sm:p-6 ">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Engagement Analytics</h2>
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-center mb-6">
                  <BarChart3 className="mx-auto text-gray-400 mb-2" size={40} />
                  <p className="text-sm text-gray-600 font-medium">Analytics Chart</p>
                  <p className="text-xs text-gray-500">Engagement trends over time</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Daily Active Users</span>
                    <span className="font-semibold text-sm sm:text-base">847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Challenge Completion Rate</span>
                    <span className="font-semibold text-green-600 text-sm sm:text-base">78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Industry Engagement</span>
                    <span className="font-semibold text-blue-600 text-sm sm:text-base">92%</span>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="bg-white rounded-xl shadow-sm border-gray">
              <div className="p-4 sm:p-6 ">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Success Stories</h2>
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                {successStories.slice(0, 2).map((story) => (
                  <div key={story.id}>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{story.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{story.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{story.date}</p>
                  </div>
                ))}
              </div>
            </div>

        
            <div className="bg-white rounded-xl shadow-sm border-gray">
              <div className="p-4 sm:p-6 ">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-4 sm:p-6 space-y-3">
                <button 
                  onClick={() => setShowCreateSuccessStory(true)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Plus size={14} />
                  <span>Publish Success Story</span>
                </button>
                <button 
                  onClick={() => setShowReport(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <FileText size={14} />
                  <span>Generate Report</span>
                </button>
                <button 
                  onClick={() => setShowAllSuggestions(true)}
                  className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Eye size={14} />
                  <span>View All Suggestions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Challenge Modal */}
      {showCreateChallenge && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-4 sm:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Create New Challenge</h2>
              <button onClick={() => setShowCreateChallenge(false)} className="text-gray-500 hover:text-gray-700">
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Challenge Title</label>
                <input
                  type="text"
                  value={newChallenge.title}
                  onChange={(e) => setNewChallenge({...newChallenge, title: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base"
                  placeholder="Enter challenge title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newChallenge.description}
                  onChange={(e) => setNewChallenge({...newChallenge, description: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 text-sm sm:text-base"
                  placeholder="Describe the challenge..."
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                  <input
                    type="date"
                    value={newChallenge.dueDate}
                    onChange={(e) => setNewChallenge({...newChallenge, dueDate: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sponsor</label>
                  <input
                    type="text"
                    value={newChallenge.sponsor}
                    onChange={(e) => setNewChallenge({...newChallenge, sponsor: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base"
                    placeholder="Company name"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
                <button
                  onClick={handleCreateChallenge}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Save size={14} />
                  <span>Create Challenge</span>
                </button>
                <button
                  onClick={() => setShowCreateChallenge(false)}
                  className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-lg font-medium text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Success Story Modal */}
      {showCreateSuccessStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-4 sm:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Publish Success Story</h2>
              <button onClick={() => setShowCreateSuccessStory(false)} className="text-gray-500 hover:text-gray-700">
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Story Title</label>
                <input
                  type="text"
                  value={newSuccessStory.title}
                  onChange={(e) => setNewSuccessStory({...newSuccessStory, title: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base"
                  placeholder="e.g., Student Hired by TechCorp"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newSuccessStory.description}
                  onChange={(e) => setNewSuccessStory({...newSuccessStory, description: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 text-sm sm:text-base"
                  placeholder="Tell the success story..."
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                  <input
                    type="text"
                    value={newSuccessStory.studentName}
                    onChange={(e) => setNewSuccessStory({...newSuccessStory, studentName: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base"
                    placeholder="Student name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    value={newSuccessStory.company}
                    onChange={(e) => setNewSuccessStory({...newSuccessStory, company: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base"
                    placeholder="Company name"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
                <button
                  onClick={handleCreateSuccessStory}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Award size={14} />
                  <span>Publish Story</span>
                </button>
                <button
                  onClick={() => setShowCreateSuccessStory(false)}
                  className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-lg font-medium text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Generate Report Modal */}
      {showReport && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-4 sm:p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Ecosystem Health Report</h2>
              <button onClick={() => setShowReport(false)} className="text-gray-500 hover:text-gray-700">
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="text-green-600" size={18} />
                  <h3 className="font-semibold text-green-900 text-sm sm:text-base">Overall Health: Excellent</h3>
                </div>
                <p className="text-xs sm:text-sm text-green-700">The TVET ecosystem is performing well with strong engagement and growth metrics.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Student Engagement</h4>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">78%</p>
                  <p className="text-xs sm:text-sm text-blue-700">+5% from last period</p>
                </div>
                
                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">Industry Participation</h4>
                  <p className="text-xl sm:text-2xl font-bold text-purple-600">92%</p>
                  <p className="text-xs sm:text-sm text-purple-700">High satisfaction</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Insights</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li>• Challenge completion rates have improved by 15% this quarter</li>
                  <li>• Industry partners are highly satisfied with student quality</li>
                  <li>• 3 new partnerships established this month</li>
                  <li>• Student employment rate post-graduation: 89%</li>
                  <li>• Average time to employment: 2.3 months</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Recommendations</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li>• Continue focus on IoT and healthcare challenges</li>
                  <li>• Expand partnerships in emerging tech sectors</li>
                  <li>• Implement mentorship programs for top performers</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium text-sm sm:text-base">
                  Download PDF
                </button>
                <button className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-lg font-medium text-sm sm:text-base">
                  Email Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View All Suggestions Modal */}
      {showAllSuggestions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-4 sm:p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">All Industry Suggestions</h2>
              <button onClick={() => setShowAllSuggestions(false)} className="text-gray-500 hover:text-gray-700">
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-4">
              {suggestions.map((suggestion) => (
                <div key={suggestion.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 space-y-3 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
                        <div className="flex items-center space-x-2">
                          <Building className="text-gray-500" size={14} />
                          <span className="font-medium text-gray-900 text-sm sm:text-base">{suggestion.company}</span>
                        </div>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded w-fit">{suggestion.status}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{suggestion.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">{suggestion.description}</p>
                      <p className="text-xs text-gray-500">Submitted: {suggestion.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-xs sm:text-sm flex-1 sm:flex-none">
                      Approve
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs sm:text-sm flex-1 sm:flex-none">
                      Discuss
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded text-xs sm:text-sm flex-1 sm:flex-none">
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Challenge Details Modal */}
      {selectedChallenge && (
        <ChallengeModal 
          challenge={selectedChallenge} 
          onClose={() => setSelectedChallenge(null)} 
        />
      )}
    </div>
  );
}