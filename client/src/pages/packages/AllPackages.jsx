import React, { useState, useEffect } from "react";
import { fetchPackages, searchPackages } from "./packageService";
import PackageCard from "./PackageCard";

const AllPackages = ({ searchQuery }) => {
  const [packages, setPackages] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPackages = async () => {
      try {
        setLoading(true);

        // If searchQuery exists, perform search
        if (searchQuery) {
          const searchData = await searchPackages(searchQuery);
          setSearchResults(searchData);
        } else {
          const data = await fetchPackages();
          setPackages(data?.packages || []);
        }
      } catch (error) {
        setError("Failed to fetch packages");
      } finally {
        setLoading(false);
      }
    };

    getPackages();
  }, [searchQuery]);

  if (loading) return <p>Loading packages...</p>;
  if (error) return <p>{error}</p>;

  // Display search results if available
  const displayPackages = searchResults.length > 0 ? searchResults : packages;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {searchResults.length > 0 ? "Search Results" : "All Packages"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayPackages.length > 0 ? (
          displayPackages.map((pkg) => <PackageCard key={pkg._id} pkg={pkg} />)
        ) : (
          <p>No packages available.</p>
        )}
      </div>
    </div>
  );
};

export default AllPackages;
