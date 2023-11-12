import { Router } from "express";
import changeProductsInformationController from "../controllers/changeProductsInformationController.js";
const router = new Router();

router.post(
    "/addToFavorites",
    changeProductsInformationController.addToFavorites
);
router.delete(
    "/deleteFromFavorites",
    changeProductsInformationController.deleteFromFavorites
);

export default router;
