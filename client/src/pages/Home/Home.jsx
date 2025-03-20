import React from "react";
import HeroSection from "./HeroSection";
import SearchBar from "./SearchBar";
import AdvertisementSection from "./AddvertisementSecton";
import PopularDestinations from "./PopularDestination";
import PreplannedPackages from "./PreplanedPackage";
import RegisterCompany from "./RegistorCompany";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection/>
      <div className="flex justify-center items-center h-full min-h-[24vh] ">
      <SearchBar />
    </div>
    <PopularDestinations/>
    <AdvertisementSection/>
    <PreplannedPackages/>
    <RegisterCompany/>
    <Footer/>
 
     
    </div>
  );
};

export default Home;
