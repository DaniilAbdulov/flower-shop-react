import pool from "../db.js";

class ProductsController {
    async getAllProducts(req, res, next) {
        let fetchFromThisId = 0;
        try {
            fetchFromThisId = parseInt(req.query.userId);
        } catch (error) {
            fetchFromThisId = null;
        }

        try {
            let allProducts = {};
            if (fetchFromThisId) {
                console.log("Выполнить запрос с определенным id");
                allProducts = await pool.query(
                    "SELECT p.id, p.title, p.price, p.img, c.name AS category,EXISTS (SELECT 1 FROM trends WHERE product_id = p.id) AS isTrend, EXISTS (SELECT 1 FROM favorites WHERE product_id = p.id and users_id=$1) AS isFavorite FROM product AS p JOIN category AS c ON p.category_id = c.id",
                    [fetchFromThisId]
                );
            } else {
                console.log("Выполнить запрпос без избранного");
                allProducts = await pool.query(
                    "SELECT p.id, p.title, p.price, p.img, c.name AS category,EXISTS (SELECT 1 FROM trends WHERE product_id = p.id) AS isTrend FROM product AS p JOIN category AS c ON p.category_id = c.id"
                );
            }
            const data = allProducts.rows;
            if (data) {
                return res.status(200).json({ data, fetchFromThisId });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async getAdvicedProducts(req, res, next) {
        try {
            const advicedProducts = await pool.query(
                "SELECT p.id, p.title, p.price, p.img FROM product as p join advice as a on p.id = a.product_id where p.id = a.product_id;"
            );
            const data = advicedProducts.rows;
            if (data) {
                return res.status(200).json({ data });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async getSingleProduct(req, res, next) {
        try {
            const singleProduct = await pool.query(
                "select id,title,description,price,available,img from product where id = $1",
                [req.query.id]
            );
            const data = singleProduct.rows;
            if (data) {
                return res.status(200).json({ data });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

export default new ProductsController();

// SELECT p.id, p.title, p.price, p.img FROM product as p join advice as a on p.id = a.product_id where p.id = a.product_id;
// /SELECT p.id, p.title, p.price, p.img, c.name AS category,EXISTS (SELECT 1 FROM trends WHERE product_id = p.id) AS isTrend, EXISTS (SELECT 1 FROM favorites WHERE product_id = p.id and users_id=1) AS isFavorite FROM product AS p JOIN category AS c ON p.category_id = c.id
