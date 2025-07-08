import React from "react";

const HireMe = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40 ">
      <div className="relative group">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse w-24 h-24"></div>

        {/* Main circular button */}
        <button className="relative bg-gray-900 text-white w-24 h-24 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-2xl flex items-center justify-center text-sm">
          Hire Me
        </button>

        {/* Rotating text around the circle */}
        {/* <div className="absolute inset-0 w-32 h-32 -top-4 -left-4 animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text className="text-xs fill-gray-600 font-medium">
              <textPath href="#circle" startOffset="0%">
                Web Developer • UI/UX Designer •
              </textPath>
            </text>
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default HireMe;
