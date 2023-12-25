import mongoose from "mongoose";
const { Schema } = mongoose;

const stopSchema = new Schema({
    coordinates: Array,
    name: String,
    prevStop: String,
    nextStop: String,
}); 

export default new mongoose.model("Stop", stopSchema);