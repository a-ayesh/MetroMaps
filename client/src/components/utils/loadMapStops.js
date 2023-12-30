async function loadMapStops(selectedCity, map) {
  const res = await fetch(
    `http://localhost:4000/tracker/initialize?city=${selectedCity}`
  );
  const stops = await res.json();
  let imageId = "";
  stops.forEach((stop) => {
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
