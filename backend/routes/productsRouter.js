import { Router } from "express";
import productsController from "../controllers/productsController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = new Router();

router.get(
    "/getAllProducts",
    authMiddleware,
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

export default router;
