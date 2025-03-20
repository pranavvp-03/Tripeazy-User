import React from "react";
import HeroSection from "./HeroSection";
import SearchBar from "./SearchBar";
import AdvertisementSection from "./AddvertisementSecton";
import Preplanned from "./PopularDestination";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection/>
      <div className="flex justify-center items-center h-full min-h-[24vh] ">
      <SearchBar />
    </div>
    <Preplanned/>
    <AdvertisementSection/>
   
 
      {/* Popular Destinations */}
      <section className="w-full py-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-3 gap-4 px-10"> Map through destinations here </div>
      </section>

      {/* Promo Section */}
      {/* <section className="w-full bg-blue-200 p-10 text-center">
        <h2 className="text-2xl font-semibold">Special Offers!</h2>
        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg">Explore Now</button>
      </section> */}

      {/* Preplanned Trips */}
      {/* <section className="w-full py-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Preplanned Trips</h2>
        <div className="grid grid-cols-3 gap-4 px-10"> Map through trips here </div>
      </section> */}

      {/* Register Company CTA */}
      {/* <section className="w-full bg-purple-600 text-white text-center py-12">
        <h2 className="text-2xl font-semibold">Register Your Company Is Here!</h2>
        <button className="mt-4 bg-white text-purple-600 py-2 px-6 rounded-lg">Register Now</button>
      </section> */}

      {/* Footer */}
      {/* <footer className="w-full bg-gray-800 text-white text-center py-6">
        <p>Footer Content Here</p>
      </footer> */}
    </div>
  );
};

export default Home;
