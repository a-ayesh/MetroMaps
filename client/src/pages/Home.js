import React, { useState } from "react";
import MetroSelect from "../components/MetroSelect";
import GoogleMap from "../components/GoogleMap";
import { useOutletContext } from "react-router-dom";

function Home() {
  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedCity] = useOutletContext();

  const handleStationSelect = (station) => {
    setSelectedStation(station);
  };

  return (
    <div id="info-container" className="container-fluid p-0">
      <div className="d-flex flex-row row justify-content-between">
        <div id="metro-select" className="col-md-2 offset-md-1">
          <MetroSelect onStationSelect={handleStationSelect} selectedCity={selectedCity} />
        </div>
        <div id="style" className="col-md-9 justify-content-center">
          <div
            id="google-map-container"
            className="border m-3"
          >
            <GoogleMap selectedStation={selectedStation} selectedCity={selectedCity} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
