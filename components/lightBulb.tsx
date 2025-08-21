import React from "react";

const LightBulb = () => {
  return (
    <div className="fixed z-40 bottom-8 right-8 animate-bounce">
      <div className="relative cursor-pointer group">
        {/* <div className="absolute inset-0 transition-opacity bg-yellow-400 rounded-full opacity-50 blur-lg group-hover:opacity-75 animate-pulse"></div> */}
        <div className="relative p-4 transition-colors duration-300 bg-gray-800 rounded-full shadow-lg group-hover:bg-gray-900">
          {/* <TiLightbulb size={32} className="text-yellow-800" /> */}
          <button className="relative flex items-center justify-center w-24 h-24 text-sm font-semibold text-white transition-colors duration-300 bg-gray-900 rounded-full shadow-2xl hover:bg-gray-800">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default LightBulb;
