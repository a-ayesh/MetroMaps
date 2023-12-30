import { Router } from "express";
import ISBstop from "../models/ISBstop.js";

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

  const {city} = req.query;
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
  ])
}


});


export default router;
