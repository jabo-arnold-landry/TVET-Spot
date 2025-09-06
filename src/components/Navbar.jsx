import React, { useState, useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { roleContext } from "../ContextProvider";
const Navbar = () => {
  const { role, setRole } = useContext(roleContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mockUserData = {
    name: "Alex Johnson",
    email: "alex.johnson@tvetbridge.com",
    role: "Users",
    avatar: "AJ",
  };

  const navigationItems = [
    { name: "Dashboard", active: true },
    { name: "Profile", active: false, to: "/profile" },
    { name: "Rankings", active: false, to: "/leader-board" },
  ];

  const dropdownItems = [
    "Profile Settings",
    "My Progress",
    "Notifications",
    "Help Center",
  ];
  function rolecheck() {
    if (role === "students") {
      return "/student-section";
    } else if (role === "TVET Board") {
      return "/tvet-section";
    } else {
      return "/private-section";
    }
  }
  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-3 lg:w-5 lg:h-3 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-1.5 h-0.5 lg:w-2 lg:h-1 bg-green-500"></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg lg:text-xl font-bold text-gray-900">
                    TVET Bridge
                  </span>
                  <span className="text-xs text-gray-500 hidden sm:block -mt-1">
                    Connect • Grow • Succeed
                  </span>
                </div>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-1 ml-8 xl:ml-12">
                <NavLink
                  to={rolecheck()}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium text-sm xl:text-base transition-colors ${
                      isActive
                        ? "bg-green-500 text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
                {role === "students" && (
                  <NavLink
                    to="/profile"
                    className="px-4 py-2 rounded-lg font-medium text-sm xl:text-base transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Profile
                  </NavLink>
                )}
                <NavLink
                  to="/leader-board"
                  className="px-4 py-2 rounded-lg font-medium text-sm xl:text-base transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  Rankings
                </NavLink>
              </div>
            </div>

            {/* Right side - Desktop User Info */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {/* User Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 hover:bg-gray-50 px-2 lg:px-3 py-2 rounded-lg transition-colors"
                >
                  <span className="text-sm text-gray-600 hidden lg:inline">
                    {role}
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsDropdownOpen(false)}
                    ></div>
                    <div className="absolute right-0 top-full mt-2 w-56 lg:w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                      <div
                        className="px-4 py-3 border-gray-100 grid gap-3"
                        onClick={(e) => {
                          if (e.target.matches("a")) {
                            setRole(e.target.textContent);
                          }
                        }}
                      >
                        <Link
                          to="/student-section"
                          className="text-sm font-medium text-gray-900 truncate"
                        >
                          students
                        </Link>
                        <Link
                          to="/tvet-section"
                          className="text-sm font-medium text-gray-900 truncate"
                        >
                          TVET Board
                        </Link>
                        <Link
                          to="/private-section"
                          className="text-sm font-medium text-gray-900 truncate"
                        >
                          Private
                        </Link>
                      </div>
                      {/* <div className="py-1">
                      {dropdownItems.map((item) => (
                        <button
                          key={item}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div> */}
                    </div>
                  </>
                )}
              </div>

              {/* Avatar */}
              <div className="w-8 h-8 lg:w-9 lg:h-9 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs lg:text-sm">
                  {mockUserData.avatar}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="hidden lg:flex items-center space-x-2 text-gray-600">
                <button className="hover:text-gray-900 transition-colors p-2 hover:bg-gray-50 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                </button>
                <button className="flex items-center space-x-2 hover:text-gray-900 transition-colors p-2 hover:bg-gray-50 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="text-sm xl:inline hidden">Logout</span>
                </button>
              </div>
            </div>

            {/* Mobile menu button and avatar */}
            <div className="flex items-center space-x-3 md:hidden">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">
                  {mockUserData.avatar}
                </span>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
              {/* Mobile Navigation */}
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      item.active
                        ? "bg-green-500 text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Mobile User Info */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="px-4 py-3 bg-gray-50 rounded-lg mb-3">
                  <p className="text-sm font-medium text-gray-900">
                    {mockUserData.name}
                  </p>
                  <p className="text-sm text-gray-500">{mockUserData.email}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {mockUserData.role}
                  </p>
                </div>

                {/* Mobile Dropdown Items */}
                <div className="space-y-1">
                  {dropdownItems.map((item) => (
                    <button
                      key={item}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    <span className="text-sm">Share</span>
                  </button>

                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
