import pool from "../db.js";

class ProductsController {
    async getAllProducts(req, res, next) {
        console.log(req.body);
        res.json({ message: "Server is work" });
        // try {

        // } catch (error) {
        //     console.log(error);
        //     return res.status(500).json({ message: "Internal Server Error" });
        // }
    }
}

export default new ProductsController();
