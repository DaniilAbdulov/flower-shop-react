import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import ordersController from "../controllers/ordersController.js";
const router = new Router();

router.get("/getOrders", authMiddleware, ordersController.getOrders);
router.get("/getOneOrder", authMiddleware, ordersController.getOneOrder);
router.get("/getOrdersInfo", authMiddleware, ordersController.getOrdersInfo);
router.post("/createOrder", authMiddleware, ordersController.createOrder);
router.put("/cancelOrder", authMiddleware, ordersController.cancelOrder);
router.put("/payOrder", authMiddleware, ordersController.payOrder);

export default router;
