
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import addver1 from "../../assets/addver.png";
import addver2 from "../../assets/addver2.png";
import addver3 from "../../assets/baloon.png";

const ads = [
  {
    img: addver1,
    title: "Wilderlife of Alaska",
    location: "Alaska, USA",
    rating: "4.9 (300 reviews)",
    description: "Explore the untouched wilderness of Alaska with us!",
  },
  {
    img: addver2,
    title: "Wilderlife of Alaska",
    location: "Alaska, USA",
    rating: "4.9 (300 reviews)",
    description: "Explore the untouched wilderness of Alaska with us!",
  },
  {
    img: addver3,
    title: "Tropical Paradise in Bali",
    location: "Bali, Indonesia",
    rating: "4.8 (500 reviews)",
    description: "Relax on the beautiful beaches of Bali!",
  },
];

export default function AdvertisementSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentAd = ads[currentIndex];

  return (
    <div className="flex items-center justify-center py-10 px-30 md:px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.10 }}
        animate={{ opacity: 2, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-red-400 rounded-2xl p-8 w-full md:max-w-[80vw] min-h-[400px]"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentAd.img}
            src={currentAd.img}
            alt="Advertisement"
            className="w-full md:w-1/2 lg:w-1/3 h-60 md:h-[400px] object-cover rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        <div className="text-white mt-6 md:mt-0 md:ml-8 max-w-md">
          <motion.span 
            className="bg-green-500 text-white px-3 py-1 rounded-full text-sm" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}>
            TRENDING NOW
          </motion.span>
          <motion.h2
            key={currentAd.title}
            className="text-2xl md:text-3xl font-bold mt-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {currentAd.title}
          </motion.h2>
          <p className="text-sm md:text-base mt-1">{currentAd.location} ★ {currentAd.rating}</p>
          <motion.p
            key={currentAd.description}
            className="mt-4 text-sm md:text-base"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {currentAd.description}
          </motion.p>
          <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500">Book Now</button>
        </div>
      </motion.div>
    </div>
  );
}






// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import addver1 from "../../assets/addver.png";
// import addver2 from "../../assets/addver2.png";
// import addver3 from "../../assets/baloon.png";

// const ads = [
//   {
//     img: addver1,
//     title: "Wilderlife of Alaska",
//     location: "Alaska, USA",
//     rating: "4.9 (300 reviews)",
//     description: "Explore the untouched wilderness of Alaska with us!",
//   },
//   {
//     img: addver2,
//     title: "Wilderlife of Alaska",
//     location: "Alaska, USA",
//     rating: "4.9 (300 reviews)",
//     description: "Explore the untouched wilderness of Alaska with us!",
//   },
//   {
//     img: addver3,
//     title: "Tropical Paradise in Bali",
//     location: "Bali, Indonesia",
//     rating: "4.8 (500 reviews)",
//     description: "Relax on the beautiful beaches of Bali!",
//   },
// ];

// export default function AdvertisementSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const currentAd = ads[currentIndex];

//   return (
//     <div className="flex items-center justify-center py-10 px-4 md:px-10">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.8 }}
//         whileHover={{ scale: 1.08 }}
//         transition={{ duration: 0.8 }}
//         className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-red-400 rounded-xl p-8 w-full md:max-w-[90vw] max-h-80 md:max-h-[500px]"
//       >
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={currentAd.img}
//             src={currentAd.img}
//             alt="Advertisement"
//             className="w-full md:w-1/3 h-60 md:h-[400px] object-cover rounded-full"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.8 }}
//           />
//         </AnimatePresence>

//         <div className="text-white mt-6 md:mt-0 md:ml-8">
//           <motion.span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             TRENDING NOW
//           </motion.span>
//           <motion.h2
//             key={currentAd.title}
//             className="text-2xl font-bold mt-2"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -20, opacity: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {currentAd.title}
//           </motion.h2>
//           <p className="text-sm mt-1">{currentAd.location} ★ {currentAd.rating}</p>
//           <motion.p
//             key={currentAd.description}
//             className="mt-4"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: 50, opacity: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {currentAd.description}
//           </motion.p>
//           <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500">Book Now</button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

