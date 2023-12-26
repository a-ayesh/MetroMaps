import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYS1heWVzaCIsImEiOiJjbHFtOHdzMHQyd2Q0MmlubTh3eXlqeDc0In0.E2UnAwKp1j4EiC1NOpM9zA";

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  // wait for map to mount
  useEffect(() => {
    if (map.current) return; // initialize map only once
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

    // initialize stops
    async function initStops() {
      const res = await fetch("http://localhost:4000/api/initialize-map");
      const stops = await res.json();
      stops.forEach((stop) => {
        map.current.addLayer({
          id: stop._id,
          type: "circle",
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
          paint: {
            "circle-radius": 10,
            "circle-color": "#3887be",
          },
        });
      });
    }

    // update devices on map
    function updateDevices() {
      const fetchData = async () => {
        const res = await fetch("http://localhost:4000/api/devices");
        const parsedRes = await res.json();
        console.log(parsedRes.message);
        for (const data of parsedRes.deviceArray) {
          if (map.current.getSource("route-" + data.device._id)) {
            map.current.getSource("route-" + data.device._id).setData(data.geojson);
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
                "line-color": "#3887be",
                "line-width": 5,
                "line-opacity": 0.75,
              },
            });
            map.current.addLayer({
              id: data.device._id,
              type: "circle",
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
              paint: {
                "circle-radius": 10,
                "circle-color": "#f30",
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
  }, []);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
