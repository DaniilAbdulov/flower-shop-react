import pool from "../db.js";

class toggleFavoriteController {
    async addToFavorites(req, res) {
        try {
            const productId = parseInt(req.body.params.productId);
            const userId = req.user.id;

            if (!productId || !userId) {
                throw new Error("Некорректный id продукта или пользователя");
            }

            const thisProductIsLikedByThisUser = await pool.query(
                "SELECT users_id, product_id FROM favorites WHERE users_id = $1 AND product_id = $2;",
                [userId, productId]
            );

            if (thisProductIsLikedByThisUser.rowCount > 0) {
                return res.status(500).json({ message: "Уже лайкнут" });
            }

            await pool.query(
                "INSERT INTO favorites (users_id, product_id) VALUES ($1, $2);",
                [userId, productId]
            );

            return res
                .status(200)
                .json({ message: "Товар добавлен в избранное" });
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Ошибка добавления товара в избранное" });
        }
    }

    async deleteFromFavorites(req, res) {
        try {
            const productId = parseInt(req.query.productId);
            const userId = req.user.id;

            if (!productId || !userId) {
                throw new Error("Некорректный id продукта или пользователя");
            }

            const thisProductIsLikedByThisUser = await pool.query(
                "SELECT users_id, product_id FROM favorites WHERE users_id = $1 AND product_id = $2;",
                [userId, productId]
            );

            if (thisProductIsLikedByThisUser.rowCount > 0) {
                const tryToDelete = await pool.query(
                    "DELETE FROM favorites WHERE users_id = $1 AND product_id = $2",
                    [userId, productId]
                );

                if (tryToDelete.rowCount) {
                    return res
                        .status(200)
                        .json({ message: "Удалено из избранного" });
                } else {
                    throw new Error("Ошибка удаления из избранного");
                }
            }

            return res
                .status(200)
                .json({ message: "deleteFromFavorites path is work" });
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Ошибка удаления товара из избранного" });
        }
    }
}

export default new toggleFavoriteController();
