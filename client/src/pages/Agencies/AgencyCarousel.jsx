// components/AgencyCarousel.jsx
import React from 'react';
import AgencyCard from './AgencyCard';

const AgencyCarousel = ({ agencies }) => {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4">
        {agencies.map((agency) => (
          <AgencyCard key={agency.id} agency={agency} />
        ))}
      </div>
    </div>
  );
};

export default AgencyCarousel;
