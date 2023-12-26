import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Stop from "./models/Stop.js";
import Device from "./models/Device.js";

dotenv.config();
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json());

await mongoose.connect(MONGODB_URI);
console.log("🛢️ [mongodb]: Connected to MongoDB");

// testing purposes
app.get("/", (req, res) => {
  console.log("🔗[GET]: /");
  res.send("Hello World!");
  res.send();
});

// query DB for all stops and send them to client
app.get("/api/initialize-map", async (req, res) => {
  console.log("🔗[GET]: /api/initialize-map");

  const stops = await Stop.find({});
  res.send(stops);
});

app.get("/api/devices", async (req, res) => {
  console.log("🔗[GET]: /api/devices");

  let deviceArray = [];
  const devices = await Device.find({});

  for (const device of devices) {
    const stop = await Stop.findOne({ name: device.nextStop });

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
      const stop = await Stop.findOne({ name: stop.nextStop });
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

    deviceArray.push({device, geojson});
  }
  res.send({ message: "Updated Map Locations", deviceArray });
});

app.post("/api/devices", async (req, res) => {
  console.log("🔗[POST]: /api/devices");

  const { name, coordinates } = req.body;
  console.log("Updated: ", name);
  const device = await Device.findOne({ name });
  device.coordinates = coordinates;
  await device.save();
  res.send({ message: `Updated DB: ${device.name}` });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
