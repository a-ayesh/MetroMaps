import { Router } from "express";
import ISBstop from "../database/models/ISBstop.js";
import dotenv from "dotenv";
import calculateDistance from "./utils/calculateDistance.js";

dotenv.config();
const GOOGLE_TOKEN = process.env.GOOGLE_TOKEN;
const router = Router();

// query DB for google location of requested stop
router.get("/map", async (req, res) => {
  console.log("🔗[GET]: /home/map");

  const { station } = req.query;
  const stop = await ISBstop.find({ name: station });
  const location = stop.map((s) => s.location);
  res.send(location);
});

// query DB for all stops of requested city
router.get("/stops", async (req, res) => {
  console.log("🔗[GET]: /home/stops");

  const { city } = req.query;
  if (city === "Twin Cities") {
    const stops = await ISBstop.find({});
    res.send(stops);
  } else {
    res.send([
      {
        line: "Red Line",
        name: "Placeholder",
      },
      {
        line: "Orange Line",
        name: "Placeholder",
      },
      {
        line: "Blue Line",
        name: "Placeholder",
      },
      {
        line: "Green Line",
        name: "Placeholder",
      },
    ]);
  }
});

// query DB for google location of closest stop to user
router.get("/geolocate", async (req, res) => {
  console.log("🔗[GET]: /home/geolocate");
  const { latitude, longitude } = req.query;

  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_TOKEN}`
  )
    .then((response) => response.json())
    .then(async (data) => {
      const city = data.results[0].address_components.find((component) =>
        component.types.includes("locality")
      ).long_name;
      
      if (city === "Islamabad") {
        const stops = await ISBstop.find({});
        const userLocation = [longitude, latitude];
        let minDistance = Infinity;
        let closestStop = null;

        stops.forEach((stop) => {
          const stopLocation = stop.coordinates;
          const distance = calculateDistance(userLocation, stopLocation);
          if (distance < minDistance) {
            minDistance = distance;
            closestStop = stop;
          }
        });

        res.send(closestStop.location);
      }
    })
    .catch((error) => {
      console.error("Error getting user city:", error);
    });
});

export default router;
