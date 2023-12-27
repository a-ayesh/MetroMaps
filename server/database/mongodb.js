import mongoose from "mongoose";
import dotenv from "dotenv";

async function DBconnect() {
  dotenv.config();
  const MONGODB_URI = process.env.MONGODB_URI;

  await mongoose.connect(MONGODB_URI);
  console.log("🛢️ [mongodb]: Connected to MongoDB");
}

export default DBconnect;
