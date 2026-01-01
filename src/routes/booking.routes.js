import { Router } from "express";
import { book } from "../modules/booking/booking.controller.js";
const router = Router();

router.post("/", book);

export default router;
