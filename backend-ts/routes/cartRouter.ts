import express from "express";
const router = express.Router();
import authMiddleware from "../middleware/authMiddleware";
import cartController from "../controllers/cartController";

router.post(
    "/addProductToCart",
    authMiddleware,
    cartController.addProductToCart
);
router.post(
    "/createNewCartDataFromOrder",
    authMiddleware,
    cartController.createNewCartDataFromOrder
);
router.get("/getCartData", authMiddleware, cartController.getCartData);
router.delete("/deleteCartItem", authMiddleware, cartController.deleteCartItem);
router.put("/setCountOfItem", authMiddleware, cartController.setCountOfItem);

export default router;
