import express from "express";
const router = express.Router();
import authMiddleware from "../middleware/authMiddleware";
import ordersController from "../controllers/ordersController";
router.get("/getOrders", authMiddleware, ordersController.getOrders);
router.get("/getOneOrder", ordersController.getOneOrder);
router.get("/getOrdersInfo", authMiddleware, ordersController.getOrdersInfo);
router.post("/createOrder", authMiddleware, ordersController.createOrder);
router.put("/cancelOrder", authMiddleware, ordersController.cancelOrder);
router.put("/payOrder", ordersController.payOrder);
router.put("/issuedOrder", ordersController.issuedOrder);

export default router;
