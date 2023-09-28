import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { FilterProvider } from "./FilterContext";
import { UserContextProvider } from "./context/userContext";
import { Navbar } from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";
import "./index.css";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <FilterProvider>
          <ParallaxProvider>
            <div className="App">
              <Navbar />
              <AppRoutes />
            </div>
          </ParallaxProvider>
        </FilterProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
