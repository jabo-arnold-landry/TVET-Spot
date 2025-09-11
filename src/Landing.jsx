import React, { useContext, useState } from "react";
import { X, Users, Building2, GraduationCap, CheckCircle } from "lucide-react";
import tvetSpotIcon from "./assets/tvetSpot.svg";
import { NavLink } from "react-router-dom";
import { roleContext } from "./ContextProvider";
import TestimonialsCarousel from "./testimonials";
import About from "./About";
import HallOfSkills from "./HallOfSkills";
import SuccessStoryForm from "./Successor";

const TVETSpotLanding = () => {
  const [showModal, setShowModal] = useState(false);
  const { setRole } = useContext(roleContext);

  const handleGetStarted = () => {
    setShowModal(true);
  };

  const handleRoleSelection = (roleName) => {
    setRole(roleName);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="fixed inset-0 bg-white">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-green-500/10 to-green-400/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
        <div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-500/10 to-blue-400/5 rounded-full blur-3xl translate-x-1/3 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-yellow-500/10 to-yellow-400/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/3 left-1/4 w-40 h-40 border-2 border-green-400/15 rounded-2xl rotate-45 opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-32 h-32 border-2 border-blue-400/15 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/4 left-2/3 w-28 h-28 bg-yellow-400/10 rounded-2xl rotate-12 opacity-50"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-gradient-to-br from-green-400/15 to-blue-400/10 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute top-3/4 right-1/3 w-20 h-20 bg-gradient-to-br from-yellow-400/15 to-green-400/10 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute top-1/6 right-1/6 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-yellow-400/10 rounded-full blur-xl opacity-40"></div>

        {/* Streaks */}
        <div className="absolute top-1/2 left-1/2 w-64 h-2 bg-gradient-to-r from-green-400/15 via-blue-400/15 to-yellow-400/15 rotate-12 blur-sm opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-3/4 left-1/4 w-48 h-2 bg-gradient-to-r from-yellow-400/15 via-green-400/15 to-blue-400/15 -rotate-12 blur-sm opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center gap-1">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={tvetSpotIcon} alt="Custom Icon" className="w-16 h-16" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">TVETSpot</h1>
              <p className="text-sm text-gray-600">Connect • Grow • Succeed</p>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Bridge the Gap Between{" "}
            <span className="text-green-500">Education</span> &{" "}
            <span className="text-blue-600">Industry</span>
          </h2>

          <p className="text-xl text-gray-600 mb-2 max-w-3xl mx-auto">
            Connect TVET students with real-world challenges, showcase skills,
            and build pathways to meaningful careers through our innovative
            platform.
          </p>

          <div className="flex flex-col md:flex-row gap-2 mb-16 p-4">
            <div className="w-full md:w-auto flex-grow-0 order-2 md:order-1 md:mt-45 ml-2">
              <About />
            </div>
            <div className="w-full md:w-auto flex-grow-[3] order-1 md:order-2">
              <TestimonialsCarousel />
            </div>
            <div className="w-full md:w-auto flex-grow order-3 md:mt-50">
              <HallOfSkills />
            </div>
          </div>

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
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Empowering Every Stakeholder
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform designed for students, industry partners,
            and educational institutions
          </p>
        </div>

        {/* Three Columns */}
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-16">
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

              {/* Corrected Modal Links */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Student Option */}
                <NavLink
                  to="/student-section"
                  onClick={() => handleRoleSelection("students")}
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
                </NavLink>

                {/* Industry Partner Option */}
                <NavLink
                  to="/private-section"
                  onClick={() => handleRoleSelection("industry partner")}
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
                </NavLink>

                {/* TVET Organization Option */}
                <NavLink
                  to="/tvet-section"
                  onClick={() => handleRoleSelection("tvet organization")}
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
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer with Success Story Form */}
      <footer className="mt-16 bg-gray-50 border-t border-gray-200 py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <SuccessStoryForm />
        </div>
      </footer>
    </div>
  );
};

export default TVETSpotLanding;
