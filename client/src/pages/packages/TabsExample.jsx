import React, { useState, useEffect } from 'react';
import { fetchPackages } from './packageService';
import PackageCard from './PackageCard';

const categories = ['All', 'Historical', 'Adventure', 'Lake', 'Industries', 'Boats', 'Beachfront', 'Natural', 'Top Cities'];

const TabsExample = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPackages = async (category) => {
    try {
      setLoading(true);
      const data = await fetchPackages(1, 10, category === 'All' ? '' : category);
      setPackages(data.packages);
    } catch (error) {
      console.error('Failed to fetch packages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPackages(activeTab);
  }, [activeTab]);

  return (
    <div className="container mx-auto">
      {/* Tabs Section */}
      <div className="flex justify-center my-6 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm rounded-full border ${
              activeTab === category
                ? 'bg-green-500 text-white'
                : 'border-gray-300 text-gray-600'
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Package Display */}
      {loading ? (
        <p className="text-center">Loading packages...</p>
      ) : packages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg._id} data={pkg} />
          ))}
        </div>
      ) : (
        <p className="text-center">No packages available in this category.</p>
      )}
    </div>
  );
};

export default TabsExample;
