import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { FilterProvider } from "./FilterContext";
import { UserContextProvider } from "./context/userContext";
import AppRoutes from "./components/AppRoutes";
import "./index.css";
import './styles/Loader.css'; // Import the new CSS file

function App() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false); // Hide spinner after 3 seconds
    }, 3000);
  }, []);

  const renderSpinner = showSpinner && (
    <div className="spinner-container">
      <div className="loading">
        <div className="d1"></div>
        <div className="d2"></div>
      </div>
    </div>
  );

  return (
    <Router>
      <UserContextProvider>
        <FilterProvider>
          <ParallaxProvider>
            <div className="App">
              {renderSpinner ? renderSpinner : <AppRoutes />}
            </div>
          </ParallaxProvider>
        </FilterProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
