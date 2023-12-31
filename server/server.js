import express from "express";
import DBconnect from "./database/mongodb.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import TrackerAPI from "./apis/TrackerAPI.js";
import HomeAPI from "./apis/HomeAPI.js";

dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json());
DBconnect();

// test respose
app.get("/", (req, res) => {
  console.log("🔗[GET]: /");

  res.send("Hello World!");
});

// API routes
app.use("/tracker", TrackerAPI);
app.use("/home", HomeAPI);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
