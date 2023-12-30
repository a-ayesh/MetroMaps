import { Router } from "express";
import ISBstop from "../models/ISBstop.js";
import dotenv from "dotenv";

dotenv.config();
const GOOGLE_TOKEN = process.env.GOOGLE_TOKEN;
const router = Router();

// query DB for google location of stop
router.get("/map", async (req, res) => {
  console.log("🔗[GET]: /home/map");

  const { station } = req.query;
  const stop = await ISBstop.find({ name: station });
  const location = stop.map((s) => s.location);
  res.send(location);
});

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

router.get("/geolocate", async (req, res) => {
  console.log("🔗[GET]: /home/geolocate");
  const { latitude, longitude } = req.query;

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

  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_TOKEN}}`
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
