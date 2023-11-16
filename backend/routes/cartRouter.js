import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import cartController from "../controllers/cartController.js";
const router = new Router();

router.post(
    "/addProductToCart",
    authMiddleware,
    cartController.addProductToCart
);
router.get("/getCartData", authMiddleware, cartController.getCartData);
// router.delete(
//     "/deleteFromFavorites",
//     authMiddleware,
//     changeProductsInformationController.deleteFromFavorites
// );

export default router;
