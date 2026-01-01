import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    resourceId: {
      type: mongoose.Types.ObjectId,
      ref: "Resource",
      required: true,
    },
    status: { type: String, enum: ["confirmed", "failed"] },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
