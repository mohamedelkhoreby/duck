import bookingRoutes from "./booking.routes.js";
import resourcesRoutes from "./resources.routes.js";
import userRoutes from "./user.routes.js";

const registerRoutes = (app) => {
  app.use("/bookings", bookingRoutes);
  app.use("/resources", resourcesRoutes);
  app.use("/users", userRoutes);
};

export default registerRoutes;
