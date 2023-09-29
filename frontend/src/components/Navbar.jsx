import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  const handleClickOutside = (event) => {
    if (event.target.id === "menu") {
      setIsOpen(false);
    }
  };

  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderSubMenu = (menuName) => {
    if (menuName === "Hommes") {
      return (
        <div className="mb-2 transition-all duration-200 ease-in-out absolute bg-gray-800 p-2 rounded shadow-lg z-10">
          <Link
            to="/hommes/tshirts"
            className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
          >
            T-shirts
          </Link>
          <Link
            to="/hommes/chemises"
            className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
          >
            Chemises
          </Link>
          <Link
            to="/hommes/sweatshirts"
            className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
          >
            Sweatshirts
          </Link>
        </div>
      );
    }
    if (menuName === "Femmes") {
      return (
        <div className="mb-2 transition-all duration-200 ease-in-out absolute bg-gray-800 p-2 rounded shadow-lg z-10">
          <Link
            to="/femmes/tshirts"
            className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
          >
            T-shirts
          </Link>
          <Link
            to="/femmes/chemises"
            className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
          >
            Chemises
          </Link>
          <Link
            to="/femmes/sweatshirts"
            className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
          >
            Sweatshirts
          </Link>
        </div>
      );
    }
    if (menuName === "Accessoires") {
      return (
        <div className="mb-2 transition-all duration-200 ease-in-out absolute bg-gray-800 p-2 rounded shadow-lg z-10">
          <Link
            to="/accessoires/sacsamain"
            className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
          >
            Sacs
          </Link>
          <Link
            to="/accessoires/sacsados"
            className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
          >
            Backpacks
          </Link>
          <Link
            to="/accessoires/casquettes"
            className="block text-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
          >
            Casquettes
          </Link>
         
         
        </div>
      );
    }
  };

  return (
    <nav className="flex items-center justify-center p-6 bg-gray-800 text-white w-full relative mt-4">
      <Link to="/">
        <h1
          className="text-2xl font-bold hidden md:inline"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          The Closet
        </h1>
      </Link>
      <div className="absolute right-6 flex space-x-4">
        <div
          onMouseEnter={() => handleMouseEnter("Hommes")}
          onMouseLeave={handleMouseLeave}
        >
          <p>Hommes</p>
          {activeMenu === "Hommes" && renderSubMenu("Hommes")}
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("Femmes")}
          onMouseLeave={handleMouseLeave}
        >
          <p>Femmes</p>
          {activeMenu === "Femmes" && renderSubMenu("Femmes")}
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("Accessoires")}
          onMouseLeave={handleMouseLeave}
        >
          <p>Accessoires</p>
          {activeMenu === "Accessoires" && renderSubMenu("Accessoires")}
        </div>
      </div>
    </nav>
  );
}
