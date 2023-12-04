import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminPanelController from "../controllers/adminPanelController.js";
const router = new Router();

router.post("/createProduct", adminPanelController.createProduct);
router.post("/createCategory", adminPanelController.createCategory);
router.delete("/deleteProduct", adminPanelController.deleteProduct);
router.delete("/deleteCategory", adminPanelController.deleteCategory);
router.put("/changeProduct", adminPanelController.changeProduct);
router.get("/getStatic", adminPanelController.getStatic);
router.get("/getPaidOrders", adminPanelController.getPaidOrders);

export default router;
