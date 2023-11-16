import pool from "../db.js";

class CartController {
    async addProductToCart(req, res, next) {
        try {
            const productId = parseInt(req.body.params.productId);
            const userId = req.user.id;
            console.log(productId);
            console.log(userId);
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
            return res
                .status(200)
                .json({ message: "Товар добавлен в корзину" });
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
            // const userHaveCart = await pool.query(
            //     "SELECT EXISTS(SELECT * FROM carts_users WHERE users_id = $1) AS result;",
            //     [userId]
            // );
            // // if (!userHaveCart.rows[0].result) {
            // //     return res.status(200).json([]);
            // // }
            // console.log(userHaveCart.rows[0].result);
            const userCart = await pool.query(
                "SELECT P.ID,P.TITLE,P.DESCRIPTION,P.PRICE,P.AVAILABLE,P.IMG,C.COUNT FROM PRODUCT AS P JOIN CARTS_USERS AS C ON P.ID = C.PRODUCT_ID WHERE C.USERS_ID = $1",
                [userId]
            );
            const data = userCart.rows;

            return res.status(200).json({ data });
        } catch (error) {
            const message = error.message;
            return res.status(500).json({
                message,
            });
        }
    }
}

export default new CartController();
