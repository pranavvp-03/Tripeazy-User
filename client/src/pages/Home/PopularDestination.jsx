import { useState } from "react";
import { motion } from "framer-motion";
import baloon from "../../assets/baloon.png";
import desert from "../../assets/desert.png";
import desert2 from "../../assets/desert2.png";
import snow from "../../assets/snow.png";
import water from "../../assets/water.png";
import island from "../../assets/island.png";

const destinations = [
  {
    id: 1,
    title: "Copenhagen, Denmark",
    src:baloon
  },
  {
    id: 2,
    title: "Monument Valley, USA",
    src: desert
  },
  {
    id: 3,
    title: "Lake Reflection, Canada",
    src: island
  },
  {
    id: 4,
    title: "Sahara Desert, Africa",
    src: snow
  },
  {
    id: 5,
    title: "Monument Valley, USA",
    src: water
  },
  {
    id: 6,
    title: "Lake Reflection, Canada",
    src: desert2
  },
 
];

const DestinationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  return (
    <div className="relative w-full overflow-hidden px-10 py-10">
      <h2 className="text-3xl font-bold mb-6">Popular Destinations</h2>
      <div className="flex gap-4 overflow-hidden">
        {destinations.map((destination, index) => {
          const isActive = index === currentIndex;
          return (
            <motion.div
              key={destination.id}
              className="relative rounded-lg overflow-hidden cursor-pointer"
              initial={{ width: "200px" }}
              animate={{ width: isActive ? "400px" : index === (currentIndex + 1) % destinations.length ? "300px" : "200px" }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={destination.src}
                alt={destination.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
                {destination.title}
              </div>
            </motion.div>
          );
        })}
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        ➡️
      </button>
    </div>
  );
};

export default DestinationCarousel;
