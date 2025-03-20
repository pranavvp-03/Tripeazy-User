import React from "react";
import island from "../../assets/island.png";
import desert from "../../assets/desert.png";
import baloon from "../../assets/baloon.png";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-full min-h-[75vh] text-center px-6 pt-2 md:pt-20">
      {/* Background Dotted Line (Hidden on Mobile) */}
      <svg
        width="100%"
        height="100%"
        className="absolute hidden md:block"
        viewBox="0 0 1000 500"
      >
        <path
          d="M 270 260 Q 370 400, 500 440"
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

      {/* Floating Images (Hidden on Mobile) */}
      <div className="absolute left-[25%] top-5.3 transform -translate-y-1/2 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg hidden md:block">
        <img src={island} alt="Island" className="w-full h-full object-cover" />
      </div>
      <div className="absolute right-[23%] top-1/8 transform -translate-y-1/2 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg hidden md:block">
        <img src={desert} alt="Desert" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img src={baloon} alt="Balloon" className="w-full h-full object-cover" />
      </div>

      {/* Hero Text (Moved Up on Mobile) */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-[-40px] md:mt-0">
        Wherever You Go, <br />
        Let’s Make It <br />
        <span className="text-purple-600">Happen</span>
      </h1>
    </section>
  );
};

export default HeroSection;
