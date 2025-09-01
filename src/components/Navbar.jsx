import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mockUserData = {
    name: "Alex Johnson",
    email: "alex.johnson@tvetbridge.com",
    role: "Student",
    avatar: "AJ"
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-3 bg-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-1 bg-green-500"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 mb-1">TVET Bridge</span>
              <span className="text-xs text-gray-500 -mt-1">Connect • Grow • Succeed</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium">
              Home
            </button>
            <button className="text-gray-600 hover:text-gray-900 px-4 py-2 font-medium">
              Dashboard
            </button>
            <button className="text-gray-600 hover:text-gray-900 px-4 py-2 font-medium">
              Profile
            </button>
            <button className="text-gray-600 hover:text-gray-900 px-4 py-2 font-medium">
              Rankings
            </button>
          </div>
        </div>

        {/* Right side - User Info */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
            >
              <span className="text-sm text-gray-600">{mockUserData.role}</span>
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">{mockUserData.name}</p>
                  <p className="text-sm text-gray-500">{mockUserData.email}</p>
                </div>
                <div className="py-1">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile Settings</button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">My Progress</button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Notifications</button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Help Center</button>
                </div>
              </div>
            )}
          </div>
          
          <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">{mockUserData.avatar}</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-600">
            <button className="hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
            <button className="hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
            <span className="text-sm">Logout</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;