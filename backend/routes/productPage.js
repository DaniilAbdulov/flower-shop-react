const express = require("express");
let router = express.Router();
const data = require("../data/example");

const setOneProduct = (data, productId) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === productId) {
            return data[i];
        }
    }
    return null;
};
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const product = setOneProduct(data, id);

    res.json(product);
});

module.exports = router;
