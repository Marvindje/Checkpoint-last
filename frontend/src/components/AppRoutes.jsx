import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import Homepage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ShopPage from "../pages/ShopPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import MenTshirtsPage from "../pages/MenTshirtsPage";
import MenShirtsPage from "../pages/MenShirtsPage";
import WomenTshirtsPage from "../pages/WomenTshirtsPage";
import WomenShirtsPage from "../pages/WomenShirtsPage";
import AccessoriesHandbagsPage from "../pages/AccessoriesHandbagsPage";
import AccessoriesBackpacksPage from "../pages/AccessoriesBackpacksPage";
import AccessoriesCapsPage from "../pages/AccessoriesCapsPage";
import Login from "../pages/Login";
import { Navbar } from "./Navbar";

function AppRoutes() {
  const { isLoged } = useUserContext();

  const [showSpinner, setShowSpinner] = useState(false);

  const handleAuthSuccess = async () => {
    setShowSpinner(true);
  };

  useEffect(() => {
    if (showSpinner) {
      setTimeout(() => {
        setShowSpinner(false);
      }, 3000);
    }
  }, [showSpinner]);

  const renderSpinner = showSpinner && (
    <div className="spinner-container">
      <div className="spinner" />
    </div>
  );

  return !isLoged ? (
    <Routes>
      <Route path="/" element={<Login onAuthSuccess={handleAuthSuccess} />} />
      <Route path="/*" element={<>404</>} />
    </Routes>
  ) : (
    <>
      {renderSpinner}
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ShopPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/hommes/tshirts" element={<MenTshirtsPage />} />
        <Route path="/hommes/chemises" element={<MenShirtsPage />} />
        <Route path="/femmes/tshirts" element={<WomenTshirtsPage />} />
        <Route path="/femmes/chemises" element={<WomenShirtsPage />} />
        <Route
          path="/accessoires/sacsamain"
          element={<AccessoriesHandbagsPage />}
        />
        <Route
          path="/accessoires/sacsados"
          element={<AccessoriesBackpacksPage />}
        />
        <Route
          path="/accessoires/casquettes"
          element={<AccessoriesCapsPage />}
        />
        <Route path="/*" element={<>404</>} />
      </Routes>
    </>
  );
}

export default AppRoutes;
