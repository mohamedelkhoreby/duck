import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalSlots: { type: Number, required: true },
  availableSlots: { type: Number, required: true }
});

export default mongoose.model("Resource", resourceSchema);
