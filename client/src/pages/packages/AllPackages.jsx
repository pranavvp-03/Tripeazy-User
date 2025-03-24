import React, { useEffect, useState } from "react";
import { fetchPackages } from "./packageService";
import PackageCard from "./PackageCard";

const AllPackages = ({ packages, setPackages }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPackages = async () => {
      try {
        if (packages.length === 0) {
          const data = await fetchPackages(1, 10);
          setPackages(data.packages);
        }
      } catch (error) {
        console.error("Failed to fetch packages:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPackages();
  }, [setPackages, packages]);

  if (loading) return <p>Loading packages...</p>;

  return (
    <div className="flex flex-wrap gap-4">
      {packages.length > 0 ? (
        packages.map((pkg) => <PackageCard key={pkg._id} data={pkg} />)
      ) : (
        <p>No packages found</p>
      )}
    </div>
  );
};

export default AllPackages;
