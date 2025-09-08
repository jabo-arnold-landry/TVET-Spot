import React, { useState } from "react";

const initialSkills = [
  {
    id: 1,
    name: "Builder",
    imageUrl: "https://placehold.co/400x500/292524/ffffff?text=Builder",
    description: "Expert in construction and DIY projects.",
  },
  {
    id: 2,
    name: "Lead",
    imageUrl: "https://placehold.co/400x500/3F3F46/ffffff?text=Lead",
    description: "A visionary leader with a knack for strategy.",
  },
  {
    id: 3,
    name: "Designer",
    imageUrl: "https://placehold.co/400x500/52525B/ffffff?text=Designer",
    description: "Creates beautiful and functional designs.",
  },
];

const HallOfSkills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [skills] = useState(initialSkills);

  return (
    <div className="flex flex-col items-center text-white font-[Inter] w-full">
      {/* Further decreased heading size and margin */}

      {/* Adjusted max-width and height to fit the much smaller cards */}
      <div
        className="relative w-full max-w-[180px] flex justify-center items-center h-[160px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {skills.map((skill, index) => {
          let transform = "";
          let opacity = "";
          let zIndex = 0;
          let scale = "";

          if (index === 1) {
            // Center card
            transform = "translate-x-0 rotate-0";
            opacity = "opacity-100";
            zIndex = 20;
            scale = "scale-100";
          } else if (index === 0) {
            // Left card
            // Adjusted translate values for the smaller card size
            transform = isHovered
              ? "-translate-x-full rotate-0"
              : "-translate-x-[35%] rotate-[-10deg]";
            opacity = isHovered ? "opacity-100" : "opacity-75";
            zIndex = 10;
            scale = isHovered ? "scale-100" : "scale-95";
          } else if (index === 2) {
            // Right card
            // Adjusted translate values for the smaller card size
            transform = isHovered
              ? "translate-x-full rotate-0"
              : "translate-x-[35%] rotate-[10deg]";
            opacity = isHovered ? "opacity-100" : "opacity-75";
            zIndex = 10;
            scale = isHovered ? "scale-100" : "scale-95";
          }

          return (
            <div
              key={skill.id}
              // Decreased the card's fixed width and height
              className={`absolute w-[100px] h-[140px] rounded-md overflow-hidden shadow-sm transition-all duration-500 ease-in-out ${transform} ${opacity} ${scale}`}
              style={{ zIndex }}
            >
              <div className="relative w-full h-full bg-gray-800 flex flex-col items-center justify-center text-center p-2 text-white">
                {/* Smaller image container */}
                <div className="w-8 h-8 rounded-full overflow-hidden mb-1 border-2 border-white">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Smaller font sizes for title and description */}
                <h2 className="text-xs font-bold">{skill.name}</h2>
                <p className="mt-1 italic text-[8px] text-gray-300">
                  "{skill.description}"
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className=" text-black text-sm md:text-base font-[Inter] mb-2 tracking-wider">
        HALL OF SKILLS
      </h1>
    </div>
  );
};

export default HallOfSkills;
