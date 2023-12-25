import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json());

await mongoose.connect(MONGODB_URI);
console.log("🛢️ [mongodb]: Connected to MongoDB");

app.get("/", (req, res) => {
  console.log("🔗[GET]: /");
  res.send();
});

// map initialization
app.get("/api/map-data", (req, res) => {
  console.log("🔗[GET]: /api/map-data");

  const mapData = {
    accessToken: MAPBOX_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [72.991803, 33.644962],
    zoom: 0,
    maxBounds: [
      [72.979412, 33.633239],
      [73.003793, 33.656912],
    ],
  };

  res.json(mapData);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
