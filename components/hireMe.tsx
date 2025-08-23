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
    <div className="fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8">
      <div className="relative group">
        {/* Glowing background effect */}
        <div className="absolute inset-0 w-16 h-16 transition-opacity rounded-full opacity-75 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-purple-600 to-pink-600 blur-lg group-hover:opacity-100 animate-pulse"></div>

        {/* Main circular button */}
        <button
          onClick={scrollToContact}
          className="relative flex items-center justify-center w-16 h-16 text-xs font-semibold text-white transition-colors duration-300 bg-gray-900 rounded-full shadow-2xl sm:w-20 sm:h-20 lg:w-24 lg:h-24 sm:text-sm lg:text-sm hover:bg-gray-800"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default HireMe;
