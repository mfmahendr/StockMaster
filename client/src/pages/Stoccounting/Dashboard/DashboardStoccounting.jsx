import React, { useState } from "react";
import Menubar from "../../../component/Menubar";
import MenuToggle from "../../../component/MenuToggle";
import Navbar from "../../../component/Navbar";
import Card from "../../../component/Dashboard-card";
import DataVisualization from "../../../component/DataVisualization";

const DashboardStoccounting = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <div
          className={`w-1/4 h-full bg-gray-200 ${
            showMenu ? "" : "hidden"
          } lg:block`}
        >
          <Menubar />
        </div>
        <div className="flex-1 sm:relative">
          <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
          <div className="h-16 bg-white shadow-md">
            <Navbar pagename={"Dashboard"} />
          </div>
          <div className="flex flex-wrap justify-between mt-10 mx-4 sm:justify-start">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
              <Card
                title={"350K"}
                subtitle={"Total revenue from home service"}
                color={"bg-gradient-to-r from-cyan-500 to-blue-500"}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
              <Card
                title={"1.5K"}
                subtitle={"Reward Points redeemed"}
                color={"bg-gradient-to-r from-purple-500 to-pink-500"}
              />
            </div>
            <div className="w-full lg:w-1/4 px-2 mb-4">
              <Card
                title={"1.2K"}
                subtitle={"Top Products/Services"}
                color={"bg-gradient-to-r from-amber-400 to-amber-600"}
              />
            </div>
            <div className="w-full lg:w-1/4 px-2 mb-4">
              <Card
                title={"50K"}
                subtitle={"New Users"}
                color={"bg-gradient-to-r from-lime-400 to-lime-600"}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-between w-full px-2 mb-4">
              <DataVisualization />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStoccounting;
