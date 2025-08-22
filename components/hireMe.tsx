import React from "react";

const HireMe = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed z-40 bottom-8 right-8 ">
      <div className="relative group">
        {/* Glowing background effect */}
        <div className="absolute inset-0 w-24 h-24 transition-opacity rounded-full opacity-75 bg-gradient-to-r from-purple-600 to-pink-600 blur-lg group-hover:opacity-100 animate-pulse"></div>

        {/* Main circular button */}
        <button
          onClick={scrollToContact}
          className="relative flex items-center justify-center w-24 h-24 text-sm font-semibold text-white transition-colors duration-300 bg-gray-900 rounded-full shadow-2xl hover:bg-gray-800"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default HireMe;
