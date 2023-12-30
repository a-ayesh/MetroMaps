import mapboxgl from "mapbox-gl";

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
    case "Faisalabad":
      center = [73.098256, 31.459261];
      maxBounds = [
        [72.893812, 31.343721],
        [73.321538, 31.535415],
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
    case "Quetta":
      center = [66.99101, 30.200425];
      maxBounds = [
        [66.758074, 29.971818],
        [67.146561, 30.384009],
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