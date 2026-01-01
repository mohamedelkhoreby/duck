export const errorHandler = (err, req, res, next) => {
  if (err.message === "No available slots") {
    return res.status(409).json({
      message: "Resource fully booked"
    });
  }

  return res.status(500).json({
    message: "Internal server error"
  });
};
