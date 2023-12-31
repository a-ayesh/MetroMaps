import mongoose from "mongoose";
const { Schema } = mongoose;

// schema for twin city stops
const isbStopSchema = new Schema({
    line: String,
    name: String,
    location: String,
    coordinates: Array,
    nextStop: String,
}); 

export default new mongoose.model("ISB_stop", isbStopSchema);