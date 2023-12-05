import { Request, Response } from "express";
import { pool } from "../db";

class ToggleFavoriteController {
    async addToFavorites(req: Request, res: Response) {
        try {
            const productId: number = parseInt(req.body.params.productId);
            const userId = req.userId;
            if (!productId || !userId) {
                throw new Error("Некорректный id продукта или пользователя");
            }

            const query = {
                text: "SELECT users_id, product_id FROM favorites WHERE users_id = $1 AND product_id = $2",
                values: [userId, productId],
            };
            const { rowCount: productLikedCount } = await pool.query(query);

            if (productLikedCount > 0) {
                return res.status(500).json({ message: "Уже лайкнут" });
            }

            const insertQuery = {
                text: "INSERT INTO favorites (users_id, product_id) VALUES ($1, $2)",
                values: [userId, productId],
            };
            await pool.query(insertQuery);

            return res
                .status(200)
                .json({ message: "Товар добавлен в избранное" });
        } catch (error) {
            return res.status(500).json({
                message: "Ошибка добавления товара в избранное",
                error: error.message,
            });
        }
    }

    async deleteFromFavorites(req: Request, res: Response) {
        try {
            const productId: number = Number(req.query.productId);
            const userId: number = req.userId;
            if (!productId || !userId) {
                throw new Error("Некорректный id продукта или пользователя");
            }

            const query = {
                text: "SELECT users_id, product_id FROM favorites WHERE users_id = $1 AND product_id = $2",
                values: [userId, productId],
            };
            const { rowCount: productLikedCount } = await pool.query(query);

            if (productLikedCount > 0) {
                const deleteQuery = {
                    text: "DELETE FROM favorites WHERE users_id = $1 AND product_id = $2",
                    values: [userId, productId],
                };
                const { rowCount: deletedCount } = await pool.query(
                    deleteQuery
                );

                if (deletedCount) {
                    return res
                        .status(200)
                        .json({ message: "Удалено из избранного" });
                } else {
                    throw new Error("Ошибка удаления из избранного");
                }
            }

            return res
                .status(200)
                .json({ message: "Товар удален из избранного" });
        } catch (error) {
            return res.status(500).json({
                message: "Ошибка удаления товара из избранного",
                error: error.message,
            });
        }
    }
}

export default new ToggleFavoriteController();
