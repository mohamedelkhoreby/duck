import express from "express";
import { validate } from "../middleware/validate.js";
import {
  registerSchema,
  loginSchema,
} from "../modules/users/user.validation.js";
import { register, login } from "../modules/users/user.controller.js";

const router = express.Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);

export default router;
