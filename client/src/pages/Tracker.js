import React from "react";
import TrackerMap from "../components/TrackerMap";
import { useOutletContext } from "react-router-dom";

function Tracker() {
  const [selectedCity] = useOutletContext();

  return (
    <div id="Tracker" className="container p-3 shadow-lg">
      <div id="mapbox-map-container" className="col-12 mx-auto">
        <TrackerMap selectedCity={selectedCity} />
      </div>
    </div>
  );
}

export default Tracker;
