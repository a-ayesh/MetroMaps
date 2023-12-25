import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:4000/api/map-data")
      .then((response) => response.json())
      .then((mapData) => {
        // Initialize map with received data
        const map = new mapboxgl.Map({
          accessToken: mapData.accessToken,
          container: mapData.container,
          style: mapData.style,
          center: mapData.center,
          zoom: mapData.zoom,
        });
        map.setMaxBounds(mapData.maxBounds);
      })
      .catch((error) => console.error("Error fetching map data:", error));
  }, []);

  return (
    <div>
      <div id="map"></div>
    </div>
  );
}

export default App;
