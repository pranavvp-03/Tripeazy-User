import React, { useState } from "react";
import PackagesNavbar from "./PackagesNavbar";
import Preplanned from "./Preplaned";
import AllPackages from "./AllPackages";
import Guidance from "./Guidence";

import { fetchOrganizedPackages } from "./packageService";
import CategoryTabs from "./Catogorytab";

const Packages = () => {
  const [activeTab, setActiveTab] = useState("Packages");
  

 
  const renderComponent = () => {
    switch (activeTab) {
      
      case "Packages":
        return <AllPackages/>;
      case "Preplanned":
        return <Preplanned />;  
      case "Guidance":
        return <Guidance />;
      default:
        return <AllPackages />;
    }
  };

  return (
    <div>
      <div className="mb-5">
        <PackagesNavbar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            
          }}
          
        />
      </div>
      <div className="flex justify-center items-center mt-4">
        <CategoryTabs/>
      </div>

      <div>{renderComponent()}</div>
    </div>
  );
};

export default Packages;
