import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import ordersController from "../controllers/ordersController.js";
const router = new Router();

router.get("/getOrders", authMiddleware, ordersController.getOrders);

export default router;
