import mongoose from "mongoose";
import Resource from "../../db/model/resource.model.js";
import Booking from "../../db/model/booking.model.js";
import logger from "../../utils/logger.js";
export const createBooking = async (user, resourceId) => {
  if (user.role !== "user") {
    throw new Error("Admins cannot create bookings");
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const resource = await Resource.findOneAndUpdate(
      {
        _id: resourceId,
        availableSlots: { $gt: 0 },
      },
      { $inc: { availableSlots: -1 } },
      { new: true, session }
    );

    if (!resource) {
      throw new Error("No available slots");
    }

    const booking = await Booking.create(
      [
        {
          userId: user._id,
          resourceId,
          status: "confirmed",
        },
      ],
      { session }
    );

    logger.info("Starting booking transaction", { resourceId });

    await session.commitTransaction();
    logger.info("Transaction committed", { resourceId });
    return booking;
  } catch (err) {
    await session.abortTransaction();
    logger.error("Transaction aborted", {
      resourceId,
      reason: err.message,
    });
  } finally {
    session.endSession();
  }
};
