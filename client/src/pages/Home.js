import React, { useState } from "react";
import MetroSelect from "../components/MetroSelect";
import GoogleMap from "../components/GoogleMap";

function Home() {
  const [selectedStation, setSelectedStation] = useState(null);

  const handleStationSelect = (station) => {
    setSelectedStation(station);
  };

  return (
    <div id="info-container" className="container">
      <div className="row justify-content-center">
        <div id="metro-select" className="col-sm-4">
          <MetroSelect onStationSelect={handleStationSelect}/>
        </div>
        <div id="google-map-container" className="col-sm-8 border rounded shadow">
          <GoogleMap selectedStation={selectedStation}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
