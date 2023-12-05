import express from "express";
const router = express.Router();
import productsController from "../controllers/productsController";
import authMiddleware from "../middleware/authMiddleware";

router.get("/getAllProducts", productsController.getAllProducts);
router.get("/getAdvicedProducts", productsController.getAdvicedProducts);
router.get("/getSingleProduct", productsController.getSingleProduct);
router.get(
    "/getFavoriteProducts",
    authMiddleware,
    productsController.getFavoriteProducts
);

export default router;
