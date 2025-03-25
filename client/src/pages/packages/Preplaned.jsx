import React, { useState, useEffect } from 'react';
import { fetchOrganizedPackages } from './packageService';
import PackageCard from './PackageCard';

const Preplanned = () => {
  const [organizedPackages, setOrganizedPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOrganizedPackages = async () => {
      try {
        const data = await fetchOrganizedPackages();
        console.log(data,"response")
        setOrganizedPackages(data);

        console.log(organizedPackages,"its organaised packages")
      } catch (error) {
        setError('Failed to fetch organized packages');
      } finally {
        setLoading(false);
      }
    };

    getOrganizedPackages();
  }, []);

  if (loading) return <p>Loading packages...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizedPackages.length > 0 ? (
          organizedPackages.map((pkg) => <PackageCard key={pkg._id} pkg={pkg} />)
        ) : (
          <p>No preplanned packages available.</p>
        )}
      </div>
    </div>
  );
};

export default Preplanned;
