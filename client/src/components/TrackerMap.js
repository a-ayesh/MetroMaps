import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import destroyMap from "./utils/destroyMap";
import createMap from "./utils/createMap";
import loadMapIcons from "./utils/loadMapIcons";
import loadMapStops from "./utils/loadMapStops";
import updateDevices from "./utils/updateDevices";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYS1heWVzaCIsImEiOiJjbHFtOHdzMHQyd2Q0MmlubTh3eXlqeDc0In0.E2UnAwKp1j4EiC1NOpM9zA";

/**
 * Renders a map component based on the selected city.
 *
 * @param {Object} props - The component props.
 * @param {string} props.selectedCity - The selected city for which the map will be rendered.
 * @returns {JSX.Element} The rendered map component.
 */
function TrackerMap({ selectedCity }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  // upon city change, destroy old map and create new one
  useEffect(() => {
    destroyMap(map);
    map.current = createMap(selectedCity, mapContainer);
    loadMapIcons(map.current);

    // wait for map to load
    map.current.on("load", async () => {
      if (selectedCity === "NUST" || selectedCity === "Twin Cities") {
        await loadMapStops(selectedCity, map.current);
      }
      if (selectedCity === "NUST") {
        updateDevices(map.current);
        setInterval(updateDevices(map.current), 3000);
      }
    });
  }, [selectedCity]);

  return (
    <div
      style={{ height: "calc(100vh - 20vh)" }}
      ref={mapContainer}
      className="map-container rounded"
    />
  );
}

export default TrackerMap;
