import { Router } from "express";
import { getCarsController, createCarController } from "../controllers/carController";
import { getLogs } from "../controllers/logController";

const router = Router();

router.get("/api/car", getCarsController);
router.post("/api/car", createCarController);
router.get("/api/logs", getLogs);

export default router;