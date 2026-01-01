import express from "express";
import { errorHandler } from "./middleware/error.middleware.js";
import registerRoutes from "./routes/index.js";

const bootstrap = (app) => {
  app.use(express.json());
  
  registerRoutes(app);

  app.use(errorHandler);

  app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
  });
};

export default bootstrap;
