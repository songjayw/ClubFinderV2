import express from "express";
import { getMyClubs, createClub } from "../controllers/club.js"
const router = express.Router();

router.get("/", getMyClubs);
router.post("/", createClub);

export default router;
