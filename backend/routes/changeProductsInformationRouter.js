import { Router } from "express";
import changeProductsInformationController from "../controllers/changeProductsInformationController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = new Router();

router.post(
    "/addToFavorites",
    authMiddleware,
    changeProductsInformationController.addToFavorites
);
router.delete(
    "/deleteFromFavorites",
    authMiddleware,
    changeProductsInformationController.deleteFromFavorites
);

export default router;
