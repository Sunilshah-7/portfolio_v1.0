import React from "react";
import { TiLightbulb } from "react-icons/ti";

const LightBulb = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40 animate-bounce">
      <div className="relative group cursor-pointer">
        {/* <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div> */}
        <div className="relative bg-gray-800 p-4 rounded-full shadow-lg group-hover:bg-gray-900 transition-colors duration-300">
          {/* <TiLightbulb size={32} className="text-yellow-800" /> */}
          <button className="relative bg-gray-900 text-white w-24 h-24 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-2xl flex items-center justify-center text-sm">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default LightBulb;
