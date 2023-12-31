import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopNavBar from "./components/TopNavbar";
import Footer from "./components/Footer";

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  const [selectedCity, setSelectedCity] = useState("Twin Cities");

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  }

  return (
    <>
      <div id="TopNavBar">
        <TopNavBar onCitySelect={handleCitySelect} selectedCity={selectedCity}/>
      </div>
      <Outlet context={[selectedCity]}/>
      <div id="Footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
