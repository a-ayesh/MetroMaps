import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYS1heWVzaCIsImEiOiJjbHFtOHdzMHQyd2Q0MmlubTh3eXlqeDc0In0.E2UnAwKp1j4EiC1NOpM9zA";

function TrackerMap({ selectedCity }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const destroyMap = () => {
    if (map.current) {
      map.current.remove();
    }
  };

  // wait for map to mount
  useEffect(() => {
    if (selectedCity === "NUST") {
      destroyMap();
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [72.991803, 33.644962],
        zoom: 0,
        maxBounds: [
          [72.979412, 33.633239],
          [73.003793, 33.656912],
        ],
      });

      map.current.loadImage("images/geo-red.png", function (error, image) {
        if (error) throw error;
        map.current.addImage("geo", image);
      });

      // initialize stops
      async function initStops() {
        const res = await fetch(
          "http://localhost:4000/tracker/initialize-nust"
        );
        const stops = await res.json();
        stops.forEach((stop) => {
          map.current.addLayer({
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
              "icon-image": "geo", // Replace with the ID of your custom marker symbol
              "icon-size": 1.25, // Adjust the size of the marker as needed
              "icon-allow-overlap": true,
            },
          });
        });
      }

      // update devices on map
      function updateDevices() {
        const fetchData = async () => {
          const res = await fetch("http://localhost:4000/tracker/update");
          const parsedRes = await res.json();
          console.log(parsedRes.message);
          for (const data of parsedRes.deviceArray) {
            if (map.current.getSource("route-" + data.device._id)) {
              map.current
                .getSource("route-" + data.device._id)
                .setData(data.geojson);
              map.current.getSource(data.device._id).setData({
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
              map.current.addLayer({
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
              map.current.addLayer({
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

      // wait for map to load
      map.current.on("load", async () => {
        await initStops();
        updateDevices();

        setInterval(updateDevices, 3000);
      });
    } else if (selectedCity === "Twin Cities") {
      destroyMap();
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [73.217472, 33.685776],
        zoom: 0,
        maxBounds: [
          [72.646423, 33.383038],
          [73.401201, 33.788654],
        ],
      });

      // initialize stops
      async function initStops() {
        const res = await fetch(
          "http://localhost:4000/tracker/initialize-twins"
        );
        const stops = await res.json();
        let imageId = "";
        stops.forEach((stop) => {
          map.current.loadImage(
            "images/geo-red.png", function (error, image) {
            if (error) throw error;
            map.current.addImage("geo-red", image);
          });
          map.current.loadImage(
            "images/geo-orange.png",
            function (error, image) {
              if (error) throw error;
              map.current.addImage("geo-orange", image);
            }
          );
          map.current.loadImage(
            "images/geo-black.png",
            function (error, image) {
              if (error) throw error;
              map.current.addImage("geo-black", image);
            }
          );
          map.current.loadImage(
            "images/geo-blue.png", function (error, image) {
            if (error) throw error;
            map.current.addImage("geo-blue", image);
          });
          map.current.loadImage(
            "images/geo-green.png",
            function (error, image) {
              if (error) throw error;
              map.current.addImage("geo-green", image);
            }
          );
          if (stop.line === "Red Line") {
            imageId = "geo-red";
          } else if (stop.line === "Orange Line") {
            imageId = "geo-orange";
          } else if (stop.line === "Multi Line") {
            imageId = "geo-black";
          } else if (stop.line === "Blue Line") {
            imageId = "geo-blue";
          } else if (stop.line === "Green Line") {
            imageId = "geo-green";
          }

          map.current.addLayer({
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
              "icon-image": `${imageId}`, // Replace with the ID of your custom marker symbol
              "icon-size": 1.25, // Adjust the size of the marker as needed
              "icon-allow-overlap": true,
            },
          });
        });
      }

      // wait for map to load
      map.current.on("load", async () => {
        await initStops();
      });
    } else {
      destroyMap();
      return;
    }
  }, [selectedCity]);

  return (
    <div
      style={{ height: "calc(100vh - 20vh)" }}
      ref={mapContainer}
      className="map-container"
    />
  );
}

export default TrackerMap;
