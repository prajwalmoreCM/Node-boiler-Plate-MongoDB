import express from "express";
import { getUsers, createUser } from "../controllers/userController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, getUsers);
router.post("/", createUser);

export default router;
