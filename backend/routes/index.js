import express from "express";
const router = express.Router();
import userRouter from "./userRouter.js";
import productsRouter from "./productsRouter.js";
import changeProductsInformationRouter from "./changeProductsInformationRouter.js";
router.use("/user", userRouter);
router.use("/product", productsRouter);
router.use("/change", changeProductsInformationRouter);
export default router;
