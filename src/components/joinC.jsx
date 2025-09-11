import React from "react";

const JoinChallengeButton = ({ isJoined, onClick }) => {
  return (
    <button
      className={`
        relative
        flex items-center justify-center
        rounded-md
        px-3 py-1.5 sm:px-4 sm:py-2
        font-semibold text-xs sm:text-sm
        transition-all duration-300 ease-in-out
        
        ${
          isJoined
            ? "bg-gray-400 text-white shadow-none cursor-not-allowed"
            : "bg-[#387476] text-white shadow-[0_4px_0_0_#243642] active:translate-y-1 active:shadow-none transform-gpu group"
        }
      `}
      disabled={isJoined}
      onClick={onClick}
    >
      <span className="relative z-10 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
        {isJoined ? "Joined" : "Join Challenge"}
      </span>

      {!isJoined && (
        <span
          className="
            absolute inset-0 rounded-md
            bg-[#387476] opacity-0 
            transition-all duration-500 ease-out 
            group-hover:animate-ping
          "
        ></span>
      )}
    </button>
  );
};

export default JoinChallengeButton;
