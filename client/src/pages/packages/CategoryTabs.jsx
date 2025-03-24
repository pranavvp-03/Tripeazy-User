import React, { useState } from "react";

const CategoryTabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("popular");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab); // Send selected tab to parent component
  };

  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => handleTabClick("popular")}
        className={`py-2 px-4 rounded-lg ${activeTab === "popular" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        Popular
      </button>
      <button
        onClick={() => handleTabClick("trending")}
        className={`py-2 px-4 rounded-lg ${activeTab === "trending" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        Trending
      </button>
    </div>
  );
};

export default CategoryTabs;
