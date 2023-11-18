import { Router } from "express";
import toggleFavoriteController from "../controllers/toggleFavoriteController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = new Router();

router.post(
    "/addToFavorites",
    authMiddleware,
    toggleFavoriteController.addToFavorites
);
router.delete(
    "/deleteFromFavorites",
    authMiddleware,
    toggleFavoriteController.deleteFromFavorites
);

export default router;
