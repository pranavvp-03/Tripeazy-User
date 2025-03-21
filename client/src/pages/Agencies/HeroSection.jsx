// components/HeroSection.jsx
import React from 'react';
import snow from "../../assets/snow.png"

const HeroSection = ({ onSearch }) => {
  return (
    <div className="relative w-full h-[450px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${snow})` ,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Text and Search Fields */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold mb-4">Find Your Perfect Travel Agency</h1>
        <p className="text-lg mb-6">Explore the best travel agencies around the world</p>

        {/* Search Bar */}
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search by Agency Name or Location"
            className="px-4 py-2 w-96 rounded-lg text-black"
            onChange={(e) => onSearch(e.target.value)}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
