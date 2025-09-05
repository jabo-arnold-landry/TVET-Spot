import React, { useState } from "react";
import { X, Users, Building2, GraduationCap, CheckCircle } from "lucide-react";
import tvetSpotIcon from "./assets/tvetSpot.svg";

const TVETSpotLanding = () => {
  const [showModal, setShowModal] = useState(false);

  const handleGetStarted = () => {
    setShowModal(true);
  };

  const handleUserTypeSelect = (userType) => {
    console.log(`Selected user type: ${userType}`);
    // Here you would typically navigate to the specific user dashboard
    setShowModal(false);
    alert(`Redirecting to ${userType} portal...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-center py-8">
        <div className="flex items-center gap-1">
          <div className="w-16 h-16  flex items-center justify-center">
            <img src={tvetSpotIcon} alt="Custom Icon" className="w-16 h-16" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">TVETSpot</h1>
            <p className="text-sm text-gray-600">Connect • Grow • Succeed</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Hero Section */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Bridge the Gap Between{" "}
            <span className="text-green-500">Education</span> &{" "}
            <span className="text-blue-600">Industry</span>
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect TVET students with real-world challenges, showcase skills,
            and build pathways to meaningful careers through our innovative
            platform.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              Get Started Today
            </button>
            <button className="px-8 py-4 text-gray-700 font-semibold hover:text-gray-900 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Empowering Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Empowering Every Stakeholder
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform designed for students, industry partners,
            and educational institutions
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Students */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Students</h4>
            <p className="text-gray-600 mb-6">
              Build your skills through real-world challenges, earn badges,
              climb leaderboards, and showcase your talent to potential
              employers.
            </p>
            <ul className="text-left space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Join hackathons and challenges
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Track growth and earn badges
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Showcase projects and skills
              </li>
            </ul>
          </div>

          {/* Industry Partners */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Industry Partners
            </h4>
            <p className="text-gray-600 mb-6">
              Discover emerging talent, create custom challenges, and shape the
              future workforce by connecting directly with skilled students.
            </p>
            <ul className="text-left space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Discover top-ranked talent
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Create custom challenges
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Suggest curriculum improvements
              </li>
            </ul>
          </div>

          {/* TVET Organizations */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-6 h-6 text-yellow-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              TVET Organizations
            </h4>
            <p className="text-gray-600 mb-6">
              Monitor engagement, manage challenges, review industry
              suggestions, and showcase student success stories to drive
              continuous improvement.
            </p>
            <ul className="text-left space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Analytics and insights
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Manage challenges and events
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Review improvement suggestions
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[rgba(107,114,128,0.5)] flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Path
              </h3>
              <p className="text-gray-600">
                Select your role to get started with TVETSpot
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Student Option */}
              <button
                onClick={() => handleUserTypeSelect("Student")}
                className="group p-6 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Student
                </h4>
                <p className="text-sm text-gray-600">
                  Build skills and showcase talent
                </p>
              </button>

              {/* Industry Partner Option */}
              <button
                onClick={() => handleUserTypeSelect("Industry Partner")}
                className="group p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Industry Partner
                </h4>
                <p className="text-sm text-gray-600">
                  Discover talent and create challenges
                </p>
              </button>

              {/* TVET Organization Option */}
              <button
                onClick={() => handleUserTypeSelect("TVET Organization")}
                className="group p-6 border-2 border-gray-200 rounded-xl hover:border-yellow-500 hover:bg-yellow-50 transition-all"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200">
                  <GraduationCap className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  TVET Organization
                </h4>
                <p className="text-sm text-gray-600">
                  Monitor and manage programs
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TVETSpotLanding;
