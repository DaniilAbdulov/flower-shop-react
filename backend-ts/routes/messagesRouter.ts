import express from "express";
const router = express.Router();
import MessagesController from "../controllers/messagesController";

router.post("/createMessage", MessagesController.createMessage);
router.get("/getMessages", MessagesController.getMessages);
router.delete("/deleteMessage", MessagesController.deleteMessage);

export default router;
