import mongoose from "mongoose";
const { Schema } = mongoose;

const isbStopSchema = new Schema({
    line: String,
    name: String,
    location: String,
    coordinates: Array,
    nextStop: String,
}); 

export default new mongoose.model("ISB_stop", isbStopSchema);