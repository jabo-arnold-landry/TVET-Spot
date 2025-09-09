import React from "react";

const JoinChallengeButton = ({ isJoined }) => {
  return (
    <button
      className={`
        flex items-center justify-center
        rounded-full
        px-3 py-1.5 sm:px-4 sm:py-2 space-x-1.5 sm:space-x-2
        transition-all duration-100 ease-in-out
        relative
        group
        
        ${
          isJoined
            ? "bg-gray-400 text-white shadow-none"
            : "bg-lime-500 text-white shadow-[0_8px_0_0_#437920] active:translate-y-2 active:shadow-none"
        }
      `}
      disabled={isJoined}
    >
      <span className="font-bold text-sm sm:text-base">
        {isJoined ? "Joined" : "Join Challenge"}
      </span>
      <div
        className={`
          flex items-center justify-center
          rounded-full
          w-5 h-5 sm:w-6 sm:h-6
          transition-transform transform group-hover:translate-x-1
          
          ${
            isJoined
              ? "bg-gray-200 text-gray-500"
              : "bg-white text-lime-500 shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.06)]"
          }
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 sm:h-4 sm:w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </button>
  );
};

export default JoinChallengeButton;
