/**
 * Loads map stops for a selected city onto the tracker map.
 * @param {string} selectedCity - The selected city for which to load the stops.
 * @param {object} map - The map object onto which the stops will be loaded.
 * @returns {Promise<void>} - A promise that resolves when the stops are loaded onto the map.
 */
async function loadMapStops(selectedCity, map) {
  // Fetch stops data from the server
  const res = await fetch(
    `http://localhost:4000/tracker/initialize?city=${selectedCity}`
  );
  const stops = await res.json();

  // Iterate over each stop and add it to the map
  stops.forEach((stop) => {
    let imageId = "";

    // Determine the appropriate image ID based on the stop's line
    switch (stop.line) {
      case "Red Line":
        imageId = "geo-red";
        break;
      case "Orange Line":
        imageId = "geo-orange";
        break;
      case "Blue Line":
        imageId = "geo-blue";
        break;
      case "Green Line":
        imageId = "geo-green";
        break;
      case "Multi Line":
        imageId = "geo-black";
        break;
      default:
        imageId = "geo-red";
    }

    // Add the stop as a symbol layer to the map
    map.addLayer({
      id: stop._id,
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: stop.coordinates,
              },
            },
          ],
        },
      },
      layout: {
        "icon-image": `${imageId}`,
        "icon-size": 1.25,
        "icon-allow-overlap": true,
      },
    });
  });
}

export default loadMapStops;