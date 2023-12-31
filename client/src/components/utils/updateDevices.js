/**
 * Updates the devices on the map.
 * 
 * @param {object} map - The map object.
 * @returns {void}
 */
function updateDevices(map) {
  console.log("here");
  const fetchData = async () => {
    const res = await fetch("http://localhost:4000/tracker/update");
    const parsedRes = await res.json();
    console.log(parsedRes.message);
    for (const data of parsedRes.deviceArray) {
      if (map.getSource("route-" + data.device._id)) {
        map.getSource("route-" + data.device._id).setData(data.geojson);
        map.getSource(data.device._id).setData({
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: data.device.coordinates,
              },
            },
          ],
        });
      } else {
        map.addLayer({
          id: "route-" + data.device._id,
          type: "line",
          source: {
            type: "geojson",
            data: data.geojson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#c7313d",
            "line-width": 4,
            "line-opacity": 0.5,
          },
        });
        map.addLayer({
          id: data.device._id,
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
                    coordinates: data.device.coordinates,
                  },
                },
              ],
            },
          },
          layout: {
            "icon-image": "bus", // Replace with the ID of your custom marker symbol
            "icon-size": 1.25, // Adjust the size of the marker as needed
            "icon-allow-overlap": true,
          },
        });
      }
    }
  };

  fetchData();
}

export default updateDevices;