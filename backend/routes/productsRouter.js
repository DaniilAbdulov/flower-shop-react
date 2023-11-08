import { Router } from "express";
import productsController from "../controllers/productsController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = new Router();

router.get("/getAllProducts", productsController.getAllProducts);
// router.post("/login", userController.login);
// router.get("/auth", authMiddleware, userController.check);

export default router;
