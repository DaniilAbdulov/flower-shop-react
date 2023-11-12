import pool from "../db.js";

class ChangeProductsInformationController {
    async addToFavorites(req, res, next) {
        const productId = parseInt(req.body.params.productId) || null;
        const userId = parseInt(req.body.params.userId) || null;
        try {
            if (!productId && !userId) {
                throw new Error("Некорректный id продукта, либо пользователя");
            }
            const thisProductIsLikedByThisUser = await pool.query(
                "select users_id, product_id from favorites where users_id = $1 and product_id = $2;",
                [userId, productId]
            );
            if (thisProductIsLikedByThisUser.rowCount > 0) {
                return res.status(500).json({ message: "Уже лайкнут" });
            }
            const tryToAddProductInFavorites = await pool.query(
                "insert into favorites (users_id, product_id) values ($1, $2);",
                [userId, productId]
            );
            if (tryToAddProductInFavorites.rowCount === 1) {
                return res
                    .status(200)
                    .json({ message: "Товар добавлен в избранное" });
            }
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ message: "Ошибка добавления товара в избранное" });
        }
    }
    async deleteFromFavorites(req, res, next) {
        const productId = parseInt(req.query.productId) || null;
        const userId = parseInt(req.query.userId) || null;
        try {
            if (!productId && !userId) {
                throw new Error("Некорректный id продукта, либо пользователя");
            }
            const thisProductIsLikedByThisUser = await pool.query(
                "select users_id, product_id from favorites where users_id = $1 and product_id = $2;",
                [userId, productId]
            );
            if (thisProductIsLikedByThisUser.rowCount > 0) {
                try {
                    const tryToDelete = await pool.query(
                        "delete from favorites where users_id = $1 and product_id = $2",
                        [userId, productId]
                    );
                    if (tryToDelete.rowCount) {
                        return res
                            .status(200)
                            .json({ message: "Удалено из избранного" });
                    } else {
                        throw new Error("Ошибка удаления из избранного");
                    }
                } catch (error) {
                    return res.status(400).json({ message: error });
                }
            }
            return res
                .status(200)
                .json({ message: "deleteFromFavorites path is work" });
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ message: "Ошибка удаления товара из избранного" });
        }
    }
}

export default new ChangeProductsInformationController();
