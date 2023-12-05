import { Request, Response } from "express";
import { pool } from "../db";
import { parseUserId } from "../functions/parseUserId";
import { transformPrice } from "../functions/transformPrice";

interface AdvicedProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    img: string;
    isfavorite: boolean;
}

class ProductsController {
    async getAllProducts(req: Request, res: Response) {
        const fetchFromThisId = parseUserId(req.query.userId);
        try {
            let allProducts: any = {};
            if (fetchFromThisId) {
                allProducts = await pool.query(
                    "SELECT p.id, p.title, p.price, p.available, p.description, p.img, c.name AS category,EXISTS (SELECT 1 FROM trends WHERE product_id = p.id) AS isTrend,EXISTS (SELECT 1 FROM advice WHERE product_id = p.id) AS isAdvice,  EXISTS (SELECT 1 FROM favorites WHERE product_id = p.id and users_id=$1) AS isFavorite FROM product AS p JOIN category AS c ON p.category_id = c.id",
                    [fetchFromThisId]
                );
            } else {
                allProducts = await pool.query(
                    "SELECT p.id, p.title, p.price,p.description, p.available, p.img, c.name AS category, EXISTS (SELECT 1 FROM advice WHERE product_id = p.id) AS isAdvice, EXISTS (SELECT 1 FROM trends WHERE product_id = p.id) AS isTrend FROM product AS p JOIN category AS c ON p.category_id = c.id"
                );
            }
            const data = allProducts.rows.map((item: any) => {
                return {
                    ...item,
                    price: transformPrice(item.price),
                };
            });
            const fetchCategories = await pool.query(
                "select id, name as label from category"
            );
            let categories = [];
            if (fetchCategories.rows.length > 0) {
                categories = fetchCategories.rows;
            }
            if (data && categories.length) {
                setTimeout(() => {
                    return res
                        .status(200)
                        .json({ data, fetchFromThisId, categories });
                }, 1000);
            }
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Ошибка получения всех продуктов" });
        }
    }
    async getAdvicedProducts(req: Request, res: Response) {
        const fetchFromThisId = parseUserId(req.query.userId);
        try {
            let advicedProducts: any = {};
            if (fetchFromThisId) {
                advicedProducts = await pool.query(
                    "SELECT p.id, p.title, p.price, p.description, p.img, EXISTS (SELECT 1 FROM favorites WHERE product_id = p.id and users_id=$1) AS isFavorite FROM product as p join advice as a on p.id = a.product_id where p.id = a.product_id;",
                    [fetchFromThisId]
                );
            } else {
                advicedProducts = await pool.query(
                    "SELECT p.id, p.title, p.price, p.description, p.img FROM product as p join advice as a on p.id = a.product_id where p.id = a.product_id;"
                );
            }
            const data = advicedProducts.rows.map((item: AdvicedProduct) => {
                return {
                    ...item,
                    price: transformPrice(item.price),
                };
            });
            if (data) {
                setTimeout(() => {
                    return res.status(200).json({ data, fetchFromThisId });
                }, 1000);
            }
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Ошибка получения трендов" });
        }
    }
    async getFavoriteProducts(req: Request, res: Response) {
        const userId: number = req.userId;
        if (!userId) {
            throw new Error("Некорректное id пользователя");
        }
        try {
            const favorites = await pool.query(
                "SELECT p.id, p.title, p.price, p.img, TRUE as isfavorite FROM favorites AS f JOIN product AS p ON f.product_id = p.id WHERE f.users_id = $1",
                [userId]
            );
            if (favorites.rows) {
                const data = favorites.rows.map((item) => {
                    return {
                        ...item,
                        price: transformPrice(item.price),
                    };
                });
                setTimeout(() => {
                    return res.status(200).json({ data });
                }, 1000);
            }
        } catch (error) {
            return res.status(500).json({
                message:
                    "Ошибка при выполнении операции в базе данных для избранных товаров",
            });
        }
    }
    async getSingleProduct(req: Request, res: Response) {
        const productId = req.query.productId;
        const fetchFromThisId = parseUserId(req.query.userId);
        let singleProduct: any = {};
        try {
            if (fetchFromThisId) {
                singleProduct = await pool.query(
                    "select p.id,p.title,p.description,p.price,p.available,p.img,EXISTS (SELECT 1 FROM favorites as f WHERE f.product_id = p.id and f.users_id = $1) AS isFavorite from product as p where id = $2",
                    [fetchFromThisId, productId]
                );
            } else {
                singleProduct = await pool.query(
                    "select id,title,description,price,available,img from product where id = $1",
                    [productId]
                );
            }
            const data = singleProduct.rows.map((item: any) => {
                return {
                    ...item,
                    price: transformPrice(item.price),
                };
            });
            if (data) {
                setTimeout(() => {
                    return res.status(200).json({ data, fetchFromThisId });
                }, 1000);
            }
        } catch (error) {
            return res.status(500).json({
                message:
                    "Ошибка при выполнении операции в базе данных для одного продукта",
            });
        }
    }
}

export default new ProductsController();
