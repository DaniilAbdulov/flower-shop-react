const express = require("express");
let router = express.Router();
const data = require("../data/example");

router.get("/", (req, res) => {
    console.log(req);
    res.json("hello");
});

module.exports = router;
