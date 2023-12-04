import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminPanelController from "../controllers/adminPanelController.js";
const router = new Router();

router.post(
    "/createProduct",
    authMiddleware,
    adminPanelController.createProduct
);
router.delete(
    "/deleteProduct",
    authMiddleware,
    adminPanelController.deleteProduct
);
router.put(
    "/changeProduct",
    authMiddleware,
    adminPanelController.changeProduct
);
router.get("/getStatic", authMiddleware, adminPanelController.getStatic);
router.get(
    "/getPaidOrders",
    authMiddleware,
    adminPanelController.getPaidOrders
);

export default router;
