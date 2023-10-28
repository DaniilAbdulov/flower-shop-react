const express = require("express");
const { join } = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.use("/api/product", require("./routes/productPage"));

// app.get("/", (req, res) => {

//     res.sendFile(join(__dirname, "..", "frontend", "public", "index.html"));
// });

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
