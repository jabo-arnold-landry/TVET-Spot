import React, { useState } from "react";
import {
  Calendar,
  Users,
  Award,
  X,
  Clock,
  Trophy,
  Target,
  CheckCircle,
} from "lucide-react";
import JoinHackButton from "./components/joinH"; // Import the custom button component

const HackathonsSection = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [joinedChallenges, setJoinedChallenges] = useState([]);

  const challenges = [
    {
      id: 1,
      title: "IoT Home Automation Hackathon",
      description: "Design and prototype an IoT system for home automation",
      points: 50,
      dueDate: "Mar 25, 2024",
      participants: 23,
      tags: [{ name: "IoT" }, { name: "Engineering " }],
      sponsor: "TechCorp",
      // Additional detailed information for modal
      fullDescription:
        "Join this exciting challenge to create a comprehensive IoT system that transforms regular homes into smart, automated environments. You'll work with cutting-edge technologies including sensors, microcontrollers, and cloud platforms to build a system that can control lighting, temperature, security, and appliances remotely. This project will enhance your skills in embedded systems, wireless communication protocols (WiFi, Bluetooth, Zigbee), mobile app development, and cloud integration. Perfect for aspiring IoT engineers and smart home enthusiasts!",
      objectives: [
        "Design system architecture for home automation",
        "Implement sensor integration and data collection",
        "Develop mobile app for remote control",
        "Create cloud-based monitoring dashboard",
        "Ensure security and privacy protocols",
      ],
      requirements: [
        "Basic knowledge of electronics and programming",
        "Familiarity with microcontrollers (Arduino/Raspberry Pi)",
        "Understanding of networking concepts",
        "Mobile development experience (optional but helpful)",
      ],
      deliverables: [
        "Working IoT prototype with at least 3 connected devices",
        "Mobile application for system control",
        "Technical documentation and system architecture",
        "Video demonstration of the complete system",
      ],
    },
    {
      id: 2,
      title: "Healthcare Data Visualization vackathon",
      description: "Create visualization tools for patient data analysis",
      points: 30,
      dueDate: "Apr 1, 2024",
      participants: 18,
      tags: [
        { name: "Healthcare" },
        { name: "Data Science" },
        { name: "Healthcare" },
        { name: "Analytics" },
      ],
      sponsor: "HealthInnovate",
      // Additional detailed information for modal
      fullDescription:
        "Transform healthcare through the power of data! This challenge focuses on developing innovative data visualization and analytics tools to help medical professionals make better decisions. You'll work with real (anonymized) healthcare datasets to create interactive dashboards, predictive models, and insightful visualizations that can improve patient outcomes. This is an opportunity to combine your technical skills with meaningful social impact in the healthcare sector.",
      objectives: [
        "Analyze complex healthcare datasets",
        "Create interactive data visualizations",
        "Develop predictive analytics models",
        "Build user-friendly dashboards for medical staff",
        "Ensure data privacy and security compliance",
      ],
      requirements: [
        "Proficiency in data analysis tools (Python/R, SQL)",
        "Experience with visualization libraries (D3.js, Plotly, Tableau)",
        "Understanding of statistical concepts",
        "Knowledge of healthcare data standards (HIPAA compliance)",
      ],
      deliverables: [
        "Interactive healthcare analytics dashboard",
        "Predictive model for patient risk assessment",
        "Data visualization portfolio showcasing key insights",
        "Technical report on methodology and findings",
      ],
    },
  ];

  const openModal = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const closeModal = () => {
    setSelectedChallenge(null);
  };

  const joinChallenge = (challengeId) => {
    if (!joinedChallenges.includes(challengeId)) {
      setJoinedChallenges([...joinedChallenges, challengeId]);
    }
    closeModal();
  };

  const isJoined = (challengeId) => joinedChallenges.includes(challengeId);

  return (
    <div className="w-full  mx-auto p-6">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Available Hackathons
        </h2>
        <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Fields</option>
          <option>Engineering</option>
          <option>Healthcare</option>
          <option>Data Science</option>
        </select>
      </div>

      <div className="space-y-6">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow "
          >
            <div className="flex justify-between items-start mb-4 ms: flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>

                {/* Challenge Details */}
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 font-medium">
                      {challenge.points} points
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Due: {challenge.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 " />
                    <span>{challenge.participants} participants</span>
                  </div>
                </div>
              </div>

              {/* REPLACED BUTTON ON MAIN PAGE */}
              <JoinHackButton
                isJoined={isJoined(challenge.id)}
                onClick={() => openModal(challenge)}
              />
            </div>
            {/* tags and sponsor div */}
            <div className="flex justify-between items-center md:flex-row flex-col gap-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {challenge.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`border border-gray-300 text-yellow-500  text-xs px-3 py-1 rounded-full font-small`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              {/* Sponsor */}
              <div className="text-sm text-gray-500">
                Sponsored by{" "}
                <span className="font-medium">{challenge.sponsor}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedChallenge && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedChallenge.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 font-medium">
                      {selectedChallenge.points} points
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Due: {selectedChallenge.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{selectedChallenge.participants} participants</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-6">
              {/* Tags - using your styling */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedChallenge.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="border border-gray-300 text-yellow-500 text-xs px-3 py-1 rounded-full font-small"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              {/* Sponsor */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Sponsored by </span>
                <span className="text-sm font-medium text-gray-800">
                  {selectedChallenge.sponsor}
                </span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  Challenge Overview
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedChallenge.fullDescription}
                </p>
              </div>

              {/* Objectives */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Learning Objectives
                </h3>
                <ul className="space-y-2">
                  {selectedChallenge.objectives.map((objective, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  Prerequisites
                </h3>
                <ul className="space-y-2">
                  {selectedChallenge.requirements.map((requirement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  What You'll Deliver
                </h3>
                <ul className="space-y-2">
                  {selectedChallenge.deliverables.map((deliverable, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              {/* REPLACED BUTTON IN MODAL */}
              <JoinHackButton
                isJoined={isJoined(selectedChallenge.id)}
                onClick={() => joinChallenge(selectedChallenge.id)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HackathonsSection;
