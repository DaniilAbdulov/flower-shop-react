import express from "express";
const router = express.Router();
import userRouter from "./userRouter.js";
import productsRouter from "./productsRouter.js";
router.use("/user", userRouter);
router.use("/products", productsRouter);
export default router;
