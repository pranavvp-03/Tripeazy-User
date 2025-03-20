import React from 'react';
import { motion } from 'framer-motion';
import preplaned from '../../assets/preplaned.png';
import preplaned2 from '../../assets/preplaned2.png';
import preplaned3 from '../../assets/preplaned3.png';
import preplaned4 from '../../assets/preplaned4.png';

const packages = [
  {
    title: 'Grand Prismatic Spring',
    description: 'Condimentum lobortis donec nibh molestie massa dictumst cursus.',
    price: '$149',
    rating: 5,
    duration: '10 Hours',
    image: preplaned
  },
  {
    title: 'Grand Prismatic Spring',
    description: 'Condimentum lobortis donec nibh molestie massa dictumst cursus.',
    price: '$149',
    rating: 5,
    duration: '10 Hours',
    image: preplaned2
  },
  {
    title: 'Grand Prismatic Spring',
    description: 'Condimentum lobortis donec nibh molestie massa dictumst cursus.',
    price: '$149',
    rating: 5,
    duration: '10 Hours',
    image: preplaned4
  },
  {
    title: 'Grand Prismatic Spring',
    description: 'Condimentum lobortis donec nibh molestie massa dictumst cursus.',
    price: '$149',
    rating: 5,
    duration: '10 Hours',
    image: preplaned3
  }
];

const PreplannedPackages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Preplanned Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 rounded-lg overflow-hidden"
            >
              <div className="w-full h-[350px]">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-500 mb-4">{pkg.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">{pkg.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">{'★'.repeat(pkg.rating)}</span>
                    <span className="ml-2">{pkg.rating}</span>
                  </div>
                  <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">{pkg.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-right mt-6 text-blue-500 cursor-pointer">View all organised trips</p>
      </div>
    </section>
  );
};

export default PreplannedPackages;
