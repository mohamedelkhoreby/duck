import { createBooking } from "./booking.service.js";

export const book = async (req, res, next) => {
  try {
    const { userId, resourceId } = req.body;
    const booking = await createBooking(userId, resourceId);

    res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
};
