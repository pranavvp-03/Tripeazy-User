import React, { useState } from "react";
import { searchPackages } from "./packageService";

const PackagesNavbar = ({ activeTab, setActiveTab, setPackages }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.trim() === "") {
      setPackages([]); // Reset if empty
      return;
    }

    try {
      const results = await searchPackages(query);
      setPackages(results);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 border-b mt-20">
      {/* Tabs Section */}
      <div className="flex space-x-8">
        {["Preplanned", "Packages", "Guidance"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`text-lg font-medium ${activeTab === tab ? "text-pink-500 underline" : "text-gray-600"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Section */}
      <input
        type="text"
        placeholder="Search packages..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border rounded-lg"
      />
    </div>
  );
};

export default PackagesNavbar;
