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

export default router;
