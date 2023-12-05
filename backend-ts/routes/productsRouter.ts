import express from "express";
const router = express.Router();
import productsController from "../controllers/productsController";
import authMiddleware from "../middleware/authMiddleware";

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
    authMiddleware,
    productsController.getSingleProduct
);
router.get(
    "/getFavoriteProducts",
    authMiddleware,
    productsController.getFavoriteProducts
);

export default router;
