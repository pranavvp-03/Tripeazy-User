import React, { useState } from "react";
import PackagesNavbar from "./PackagesNavbar";
import Preplanned from "./Preplaned";
import AllPackages from "./AllPackages";
import Guidance from "./Guidence";
import TabsExample from "./TabsExample";

const Packages = () => {
  const [activeTab, setActiveTab] = useState("Packages");
  const [packages, setPackages] = useState([]);

  const renderComponent = () => {
    switch (activeTab) {
      case "Preplanned":
        return <Preplanned />;
      case "Packages":
        return <AllPackages packages={packages} setPackages={setPackages} />;
      case "Guidance":
        return <Guidance />;
      default:
        return <AllPackages packages={packages} setPackages={setPackages} />;
    }
  };

  return (
    <div>
      {/* Navbar and Tabs Section */}
      <div className="mb-5">
        <PackagesNavbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setPackages={setPackages}
        />
      </div>

      {/* Conditional Component Rendering */}
      <div>
        {activeTab === "Packages" ? (
          <TabsExample />
        ) : (
          renderComponent()
        )}
      </div>
    </div>
  );
};

export default Packages;
