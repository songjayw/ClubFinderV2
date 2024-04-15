import express from "express";
import { getAllEvents, createEvent } from "../controllers/event.js"
const router = express.Router();

router.get("/", getAllEvents);
router.post("/", createEvent);

export default router;
