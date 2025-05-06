// components/AgencyCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import island from '../../assets/island.png';

const AgencyCard = ({ agency }) => {
  const navigate = useNavigate();  // Get the navigate function

  // Handle agency card click
  const handleClick = () => {
    navigate(`/agency/${agency._id}`);  // Use navigate to go to the agency detail page
  };

  return (
    <div 
      className="w-full h-[180px] overflow-hidden rounded-xl shadow-md flex bg-white cursor-pointer"
      onClick={handleClick}  // Trigger onClick on card click
    >
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
