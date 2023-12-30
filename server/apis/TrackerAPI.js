import { Router } from "express";
import Stop from "../models/Stop.js";
import ISBstop from "../models/ISBstop.js";
import Device from "../models/Device.js";
import dotenv from "dotenv";

dotenv.config();
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;
const router = Router();

// query DB for all stops and send them to client
router.get("/initialize", async (req, res) => {
  console.log("🔗[GET]: /tracker/initialize");

  const { city } = req.query;
  switch (city) {
    case "Twin Cities":
      const stops = await ISBstop.find({});
      res.send(stops);
      break;
    case "NUST":
      const nustStops = await Stop.find({});
      res.send(nustStops);
      break;
    default:
      res.send({ message: "Invalid City" });
  }
});

// query DB for all devices and send them to client
router.get("/update", async (req, res) => {
  console.log("🔗[GET]: /tracker/update");

  let deviceArray = [];
  const devices = await Device.find({});

  for (const device of devices) {
    let stop = await Stop.findOne({ name: device.nextStop });

    function calculateDistance(coord1, coord2) {
      const [lon1, lat1] = coord1;
      const [lon2, lat2] = coord2;

      const R = 6371e3; // Earth's radius in meters
      const phi1 = (lat1 * Math.PI) / 180;
      const phi2 = (lat2 * Math.PI) / 180;
      const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
      const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

      const a =
        Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
        Math.cos(phi1) *
          Math.cos(phi2) *
          Math.sin(deltaLambda / 2) *
          Math.sin(deltaLambda / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const distance = R * c;
      return distance;
    }

    const thresholdDistance = 30;
    let distance = calculateDistance(device.coordinates, stop.coordinates);
    while (distance < thresholdDistance) {
      stop = await Stop.findOne({ name: stop.nextStop });
      distance = calculateDistance(device.coordinates, stop.coordinates);
    }

    device.nextStop = stop.name;
    await device.save();

    const mapboxQuery = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${device.coordinates[0]},${device.coordinates[1]};${stop.coordinates[0]},${stop.coordinates[1]}?steps=true&geometries=geojson&access_token=${MAPBOX_TOKEN}`
    );
    const json = await mapboxQuery.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;
    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };

    deviceArray.push({ device, geojson });
  }
  res.send({ message: "Updated Map Locations", deviceArray });
});

// update DB with new coordinates
router.post("/update", async (req, res) => {
  const { name, coordinates } = req.body;
  console.log(`🔗[POST]: /tracker/update from ${name}`);
  
  const device = await Device.findOne({ name: name });
  device.coordinates = coordinates;
  await device.save();
  res.send({ message: `Updated DB: ${device.name}` });
});

export default router;