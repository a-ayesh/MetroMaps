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

export default router;