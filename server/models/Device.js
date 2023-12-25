import mongoose from "mongoose";
const { Schema } = mongoose;

const deviceSchema = new Schema({
    name: String,
    coordinates: Array,
    nextStop: String,
}); 

export default new mongoose.model("Device", deviceSchema);