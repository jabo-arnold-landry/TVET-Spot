import React, { useState } from "react";

const initialSkills = [
  {
    id: 1,
    name: "Ngabo",
    description: "Expert in construction and DIY projects.",
    // New card background color
    bgColor: "bg-yellow-500",
    // Text color for readability
    textColor: "text-white",
    profileBg: "bg-white",
  },
  {
    id: 2,
    name: "Alice",
    description: "A visionary leader with a knack for strategy.",
    // New card background color
    bgColor: "bg-orange-600",
    // Text color for readability
    textColor: "text-white",
    profileBg: "bg-white",
  },
  {
    id: 3,
    name: "Christian",
    description: "Creates beautiful and functional designs.",
    // New card background color
    bgColor: "bg-fuchsia-600",
    // Text color for readability
    textColor: "text-white",
    profileBg: "bg-white",
  },
];

const HallOfSkills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [skills] = useState(initialSkills);

  return (
    <div className="flex flex-col items-center font-[Inter] w-full">
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
            transform = "translate-x-0 rotate-0";
            opacity = "opacity-100";
            zIndex = 20;
            scale = "scale-100";
          } else if (index === 0) {
            transform = isHovered
              ? "-translate-x-full rotate-0"
              : "-translate-x-[35%] rotate-[-10deg]";
            opacity = isHovered ? "opacity-100" : "opacity-75";
            zIndex = 10;
            scale = isHovered ? "scale-100" : "scale-95";
          } else if (index === 2) {
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
              className={`absolute w-[100px] h-[140px] rounded-md overflow-hidden shadow-sm transition-all duration-500 ease-in-out ${transform} ${opacity} ${scale}`}
              style={{ zIndex }}
            >
              {/* Card background uses the new bgColor property */}
              <div
                className={`relative w-full h-full ${skill.bgColor} flex flex-col items-center justify-center text-center p-2 ${skill.textColor}`}
              >
                {/* Profile image container uses the profileBg property */}
                <div
                  className={`w-8 h-8 rounded-full overflow-hidden mb-1 border-2 border-white flex items-center justify-center ${skill.profileBg}`}
                >
                  <span className={`text-sm font-bold text-gray-800`}>
                    {skill.name[0]}
                  </span>
                </div>
                <h2 className="text-xs font-bold">{skill.name}</h2>
                <p className="mt-1 italic text-[8px] text-gray-200">
                  "{skill.description}"
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-black text-sm md:text-base font-roboto font-italic mb-2 tracking-wider">
        HALL OF SKILLS
      </h1>
    </div>
  );
};

export default HallOfSkills;
