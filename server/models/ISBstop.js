import mongoose from "mongoose";
const { Schema } = mongoose;

const isbStopSchema = new Schema({
    line: String,
    name: String,
    location: String,
}); 

export default new mongoose.model("ISB_stop", isbStopSchema);