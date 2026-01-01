import express from "express";
import {
  getAllResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
} from "../modules/resources/resources.controller.js";
const router = express.Router();

router.get("/", getAllResources);
router.get("/:id", getResourceById);
router.post("/", createResource);
router.put("/:id", updateResource);
router.delete("/:id", deleteResource);

export default router;
