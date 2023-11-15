import { Router } from "express";
import productsController from "../controllers/productsController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = new Router();

router.get(
    "/getAllProducts",

    productsController.getAllProducts
);
router.get(
    "/getAdvicedProducts",
    authMiddleware,
    productsController.getAdvicedProducts
);
router.get(
    "/getSingleProduct",

    productsController.getSingleProduct
);
router.get(
    "/getFavoriteProducts",
    authMiddleware,
    productsController.getFavoriteProducts
);
// router.post("/login", userController.login);
// router.get("/auth", authMiddleware, userController.check);

export default router;
