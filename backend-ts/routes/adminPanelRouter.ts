import express from "express";
const router = express.Router();
import adminPanelController from "../controllers/adminPanelController";

router.post("/createProduct", adminPanelController.createProduct);
router.post("/createCategory", adminPanelController.createCategory);
router.delete("/deleteProduct", adminPanelController.deleteProduct);
router.delete("/deleteCategory", adminPanelController.deleteCategory);
router.put("/changeProduct", adminPanelController.changeProduct);
router.get("/getStatic", adminPanelController.getStatic);
router.get("/getPaidOrders", adminPanelController.getPaidOrders);

export default router;
