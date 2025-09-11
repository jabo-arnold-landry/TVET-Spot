import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center px-0 font-sans">
      <style>
        {`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .bounce-container {
          animation: bounce 1.5s infinite ease-in-out;
        }
        `}
      </style>
      <div className="bounce-container flex flex-col relative w-full max-w-[220px] rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 bg-white">
        <div className="relative flex items-center justify-center w-full h-48">
          {/* Video Background with increased opacity */}
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-50" // Increased video opacity to 50%
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/src/assets/RTB.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Solid Dark Overlay with decreased transparency */}
          <div className="absolute inset-0 bg-gray-900/60"></div>{" "}
          {/* Overlay opacity set to 60% */}
          {/* Question mark on top of the video and overlay */}
          <h1 className="relative z-10 text-5xl font-bold leading-none text-white">
            ?
          </h1>
        </div>

        <div className="p-3">
          <h2 className="text-gray-800 text-center text-sm md:text-base font-bold leading-tight">
            Get to know what is TVETSpot
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
