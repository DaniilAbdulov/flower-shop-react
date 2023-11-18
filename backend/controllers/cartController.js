import pool from "../db.js";

class CartController {
    async addProductToCart(req, res, next) {
        try {
            const productId = parseInt(req.body.params.productId);
            const userId = req.user.id;
            const candidat = await pool.query(
                "SELECT EXISTS(SELECT * FROM carts_users WHERE users_id = $1 and product_id = $2) AS result;",
                [userId, productId]
            );

            if (candidat.rows[0].result) {
                throw new Error("Товар уже в вашей корзине");
            }
            const addProduct = await pool.query(
                "insert into carts_users (users_id,product_id,count) values ($1,$2,1)",
                [userId, productId]
            );
            if (addProduct.rowCount !== 1) {
                throw new Error("Ошибка добавления товара в избранное");
            }
            return res.status(200).json({ message: "added" });
        } catch (error) {
            const message = error.message;
            return res.status(500).json({
                message,
            });
        }
    }
    async getCartData(req, res, next) {
        const userId = req.user.id;
        try {
            const userCart = await pool.query(
                "SELECT P.ID,P.TITLE,P.DESCRIPTION,P.PRICE,P.AVAILABLE,P.IMG,C.COUNT FROM PRODUCT AS P JOIN CARTS_USERS AS C ON P.ID = C.PRODUCT_ID WHERE C.USERS_ID = $1 ORDER BY P.TITLE",
                [userId]
            );
            const userCartTotal = await pool.query(
                "SELECT SUM(count) as count,SUM(res) AS sum FROM (SELECT c.users_id, SUM(c.count) AS count, SUM(c.count * p.price) AS res FROM carts_users AS c JOIN product AS p ON c.product_id = p.id WHERE c.users_id = $1 GROUP BY c.users_id) AS subquery",
                [userId]
            );
            const data = userCart.rows;
            const cartTotal = userCartTotal.rows;
            setTimeout(() => {
                return res.status(200).json({ data, cartTotal });
            }, 2000);
            // return res.status(200).json({ data, cartTotal });
        } catch (error) {
            const message = error.message;
            return res.status(500).json({
                message,
            });
        }
    }
    async setCountOfItem(req, res, next) {
        const userId = req.user.id;
        const productId = req.body.params.id;
        const count = req.body.params.newCount;
        try {
            const setCountOfItem = await pool.query(
                "UPDATE carts_users SET count = $1 WHERE users_id = $2 AND product_id = $3",
                [count, userId, productId]
            );
            if (setCountOfItem.command === "UPDATE") {
                return res.status(200).json({ message: "count changed" });
            } else {
                throw new Error("Ошибка изменения количесвта товара в корзине");
            }
        } catch (error) {
            const err = error.error;
            return res.status(400).json({ err });
        }
    }
    async deleteCartItem(req, res, next) {
        const userId = req.user.id;
        const productId = parseInt(req.query.productId);
        try {
            const deleteProduct = await pool.query(
                "DELETE FROM CARTS_USERS WHERE USERS_ID = $1 AND PRODUCT_ID = $2",
                [userId, productId]
            );
            if (
                deleteProduct.command === "DELETE" &&
                deleteProduct.rowCount === 1
            ) {
                return res.status(200).json({ message: "deleted" });
            } else {
                throw new Error("Ошибка удаления товара из корзины");
            }
        } catch (error) {
            const err = error.error;
            return res.status(400).json({ err });
        }
    }
}

export default new CartController();
