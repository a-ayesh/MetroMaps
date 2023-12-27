import express from "express";
import DBconnect from "./database/mongodb.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import TrackerRouter from "./routes/TrackerRoute.js";

dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/tracker', TrackerRouter);
DBconnect();

// testing purposes
app.get("/", (req, res) => {
  console.log("🔗[GET]: /");

  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
