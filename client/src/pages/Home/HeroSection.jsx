import React from "react";
import island from "../../assets/island.png";
import desert from "../../assets/desert.png";
import baloon from "../../assets/baloon.png";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-full min-h-[70vh] text-center px-6 pt-2 md:pt-16"> {/* Reduced pt-20 to pt-16 */}
      
      {/* Background Dotted Line (Hidden on Mobile) - UNCHANGED */}
      <svg
        width="90%"
        height="90%"
        className="absolute hidden md:block"
        viewBox="0 0 1000 500 "
      >
        <path
          d="M 270 260 Q 370 400, 500 440 500 "
          stroke="#8b5cf6"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray="6 6"
        />
        <path
          d="M 720 260 Q 630 400, 500 440"
          stroke="#8b5cf6"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray="6 6"
        />
      </svg>

      {/* Floating Images - COMPLETELY UNCHANGED */}
      <div className="absolute left-[25%] top-5.3 transform -translate-y-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg hidden md:block">
        <img src={island} alt="Island" className="w-full h-full object-cover" />
      </div>
      <div className="absolute right-[23%] top-1/8 transform -translate-y-1/2 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg hidden md:block">
        <img src={desert} alt="Desert" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img src={baloon} alt="Balloon" className="w-full h-full object-cover" />
      </div>

      {/* Hero Text - ONLY THIS CHANGED */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-[-30px] md:mt-[-40px]"> {/* Increased negative margin */}
        Wherever You Go, <br />
        Let's Make It <br />
        <span className="text-purple-600">Happen</span>
      </h1>
    </section>
  );
};

export default HeroSection;