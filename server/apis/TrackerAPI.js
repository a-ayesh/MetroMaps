import { Router } from "express";
import Stop from "../database/models/Stop.js";
import ISBstop from "../database/models/ISBstop.js";
import Device from "../database/models/Device.js";
import dotenv from "dotenv";
import calculateDistance from "./utils/calculateDistance.js";

dotenv.config();
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;
const router = Router();

// query DB for city's stops and send them to client
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

// query DB for all devices in city, calculate distance to next stop, send api call to mapbox for route, and send them to client
router.get("/update", async (req, res) => {
  console.log("🔗[GET]: /tracker/update");

  let deviceArray = [];
  const devices = await Device.find({});

  for (const device of devices) {
    let stop = await Stop.findOne({ name: device.nextStop });

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

// update DB with new device coordinates
router.post("/update", async (req, res) => {
  const { name, coordinates } = req.body;
  console.log(`🔗[POST]: /tracker/update from ${name}`);

  const device = await Device.findOne({ name: name });
  device.coordinates = coordinates;
  await device.save();

  res.send({ message: `Updated DB: ${device.name}` });
});

export default router;
