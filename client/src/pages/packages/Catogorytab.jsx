import React, { useState } from 'react';

const categories = ['All', 'Historical', 'Adventure', 'Lake', 'Industries', 'Boats', 'Beachfront', 'Natural', 'Top Cities'];

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="flex flex-wrap gap-3 pb-5  ">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full border ${
            activeCategory === category ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
