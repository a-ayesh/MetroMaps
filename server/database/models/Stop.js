import mongoose from "mongoose";
const { Schema } = mongoose;

// temp schema for nust stops
const stopSchema = new Schema({
    coordinates: Array,
    name: String,
    prevStop: String,
    nextStop: String,
}); 

export default new mongoose.model("Stop", stopSchema);