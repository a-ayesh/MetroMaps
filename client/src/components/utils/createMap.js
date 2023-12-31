import mapboxgl from "mapbox-gl";

/**
 * Creates a map using Mapbox GL and sets the initial center and max bounds based on the specified city.
 * @param {string} city - The name of the city for which the map is being created.
 * @param {Object} mapContainer - The reference to the HTML element that will contain the map.
 * @returns {mapboxgl.Map} The created Mapbox GL map instance.
 */
function createMap(city, mapContainer) {
  let center;
  let maxBounds;
  switch (city) {
    case "Twin Cities":
      center = [73.217472, 33.685776];
      maxBounds = [
        [72.779393, 33.500977],
        [73.226706, 33.775137],
      ];
      break;
    case "Peshawar":
      center = [71.539231, 34.01088];
      maxBounds = [
        [71.345614, 33.931506],
        [71.666018, 34.076512],
      ];
      break;
    case "Lahore":
      center = [74.319975, 31.534961];
      maxBounds = [
        [74.066033, 31.338301],
        [74.590504, 31.640197],
      ];
      break;
    case "Multan":
      center = [71.486123, 30.213887];
      maxBounds = [
        [71.405063, 30.139492],
        [71.583839, 30.28367],
      ];
      break;
    case "Karachi":
      center = [67.059076, 24.901504];
      maxBounds = [
        [66.918275, 24.742484],
        [67.386198, 25.023873],
      ];
      break;
    case "NUST":
      center = [72.991803, 33.644962];
      maxBounds = [
        [72.979412, 33.633239],
        [73.003793, 33.656912],
      ];
      break;
    default:
      center = [73.096, 33.6844];
      maxBounds = [
        [73.075, 33.669],
        [73.114, 33.699],
      ];
  }

  return new mapboxgl.Map({
    container: mapContainer.current,
    style: "mapbox://styles/mapbox/streets-v12",
    center: center,
    zoom: 0,
    maxBounds: maxBounds,
  });
}

export default createMap;
