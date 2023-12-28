import React, { useState } from "react";
import MetroSelect from "../components/MetroSelect";
import GoogleMap from "../components/GoogleMap";

function Home() {
  const [selectedStation, setSelectedStation] = useState(null);

  const handleStationSelect = (station) => {
    setSelectedStation(station);
  };

  return (
    <div id="info-container" className="container-fluid p-0">
      <div className="d-flex flex-row row justify-content-between">
        <div id="metro-select" className="col-md-2 offset-md-1">
          <MetroSelect onStationSelect={handleStationSelect} />
        </div>
        <div id="style" className="col-md-9 justify-content-center">
          <div
            id="google-map-container"
            className="border m-3"
          >
            <GoogleMap selectedStation={selectedStation} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
