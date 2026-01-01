import express from "express";
import bootstrap from "./src/app.controller.js";
import dotenv from "dotenv";
import logger from "./src/utils/logger.js";
import connectDB from "./src/db/connection.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

try {
  await connectDB();
  logger.info("Database connected successfully");
} catch (err) {
  logger.error("Failed to connect database", err);
  process.exit(1);
}

bootstrap(app);

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
  logger.info("Duck running 🦆");
});
