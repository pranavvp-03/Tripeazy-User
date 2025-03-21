import React, { useState, useEffect } from 'react';
import AgencyCard from './AgencyCard';
import HeroSection from './HeroSection';
import axiosInstance from 'src/utils/axiosInstance';

const AgencyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [agencies, setAgencies] = useState([]);
  const [filteredAgencies, setFilteredAgencies] = useState([]);

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const response = await axiosInstance.get("/auth/agencies");
        setAgencies(response.data);
        setFilteredAgencies(response.data);
      } catch (error) {
        console.error('Error fetching agencies:', error);
      }
    };

    fetchAgencies();
  }, []);

  // Debouncing the Search Input
  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = agencies.filter((agency) =>
        (agency?.companyName?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (agency?.cityName?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (agency?.stateName?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (agency?.countryname?.toLowerCase() || '').includes(searchTerm.toLowerCase())
      );
      setFilteredAgencies(filtered);
      console.log(filtered, "its filtered");
    }, 300);
  
    return () => clearTimeout(timer);
  }, [searchTerm, agencies]);
  

  return (
    <div>
      <HeroSection onSearch={setSearchTerm} />
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredAgencies.length > 0 ? (
          filteredAgencies.map((agency) => <AgencyCard key={agency._id} agency={agency} />)
        ) : (
          <p>No agencies found.</p>
        )}
      </div>
    </div>
  );
};

export default AgencyList;
