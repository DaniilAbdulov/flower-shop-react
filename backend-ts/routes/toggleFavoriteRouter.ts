import express from "express";
const router = express.Router();
import toggleFavoriteController from "../controllers/toggleFavoriteController";
import authMiddleware from "../middleware/authMiddleware";

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
