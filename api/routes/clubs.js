import express from "express";
import { getMyClubs, getUserClubs, createClub } from "../controllers/club.js"
const router = express.Router();

router.get("/", getMyClubs);
router.get("/user/:userIdC", getUserClubs);
router.post("/", createClub);

export default router;
