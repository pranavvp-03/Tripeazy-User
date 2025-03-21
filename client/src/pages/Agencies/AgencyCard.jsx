import React from 'react';
import island from '../../assets/island.png';

const AgencyCard = ({ agency }) => {
  return (
    <div className="w-full h-[180px] overflow-hidden rounded-xl shadow-md flex bg-white">
      {/* Left Section: Image */}
      <img
        src={agency.image || island}
        alt={agency.companyName}
        className="w-[40%] h-full object-cover rounded-l-xl"
      />
      
      {/* Right Section: Details */}
      <div className="w-[60%] p-4 flex flex-col justify-center">
        <h3 className="text-gray-900 text-xl font-semibold">{agency.companyName}</h3>
        <p className="text-gray-700">{agency.cityName}, {agency.stateName}, {agency.countryname}</p>
        <p className="text-yellow-500">⭐ {agency.rating || 'No rating available'}</p>
      </div>
    </div>
  );
};

export default AgencyCard;
