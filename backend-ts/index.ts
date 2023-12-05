import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import router from "./routes/routes";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
