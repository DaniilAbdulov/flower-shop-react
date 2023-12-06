import { Request, Response } from "express";
import { pool } from "../db";
import { getCategoryId } from "../functions/getCategoryId";
import { transformPrice } from "../functions/transformPrice";
import { transformData } from "../functions/transformData";
class AdminPanelController {
    async createProduct(req: Request, res: Response) {
        if (!req.body.params.newProduct) {
            throw new Error("Ошибка получения запроса");
        }
        const {
            title,
            description,
            price,
            available,
            isTrend,
            isAdvice,
            img,
            category,
        } = req.body.params.newProduct;
        try {
            //Получаем id категории
            const getCategories = await pool.query("SELECT * FROM CATEGORY");
            const categoryId = getCategoryId(getCategories.rows, category, res);
            //добавляем новый товар в таблицу
            const addInProductTable = await pool.query(
                "INSERT INTO PRODUCT (title,description,price,available,img,category_id) values($1,$2,$3,$4,$5,$6)",
                [title, description, price, available, img, categoryId]
            );
            if (!addInProductTable.rowCount) {
                return res
                    .status(500)
                    .json({ message: "Товар не был добавлен в БД" });
            }
            //получаем id нового товара
            const product_id = await pool.query(
                "SELECT id from product where title = $1 AND description=$2 AND PRICE = $3",
                [title, description, price]
            );
            //проверяем,были ли переданы значения isTrend isAdvice
            if (product_id.rows[0].id) {
                const id = product_id.rows[0].id;
                if (isTrend) {
                    await pool.query(
                        "INSERT INTO TRENDS (PRODUCT_ID) values($1)",
                        [id]
                    );
                }
                if (isAdvice) {
                    await pool.query(
                        "INSERT INTO ADVICE (PRODUCT_ID) values($1)",
                        [id]
                    );
                }
            }

            return res.status(200).json({ message: "Product created" });
        } catch (error) {
            return res.status(500).json({ message: "Ошибка создания товара" });
        }
    }
    async deleteProduct(req: Request, res: Response) {
        const productId: number = Number(req.query.productId);
        if (!productId || typeof productId !== "number") {
            throw new Error("Некорректные данные");
        }
        try {
            const deleteProduct = await pool.query(
                "DELETE FROM PRODUCT WHERE ID = $1",
                [productId]
            );
            if (deleteProduct.command !== "DELETE") {
                throw new Error("Not deleted");
            }
            setTimeout(() => {
                res.status(200).json({ message: "Deleted success" });
            }, 1000);
            // res.status(200).json({ message: "Deleted success" });
        } catch (error) {
            return res.status(500).json({ message: "Ошибка удаления товара" });
        }
    }
    async deleteCategory(req: Request, res: Response) {
        const category = req.query.category;
        if (!category || typeof category !== "string") {
            throw new Error("Некорректные данные");
        }
        try {
            const tryToDeleteCategory = await pool.query(
                "DELETE FROM CATEGORY WHERE NAME = $1",
                [category]
            );
            if (
                tryToDeleteCategory.command === "DELETE" &&
                tryToDeleteCategory.rowCount === 1
            ) {
                res.status(200).json({ message: "Deleted success" });
            }
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Ошибка удаления категории" });
        }
    }
    async createCategory(req: Request, res: Response) {
        const newCategory = req.body.params.newCategory;
        if (!newCategory || typeof newCategory !== "string") {
            throw new Error("Некорректные данные");
        }
        try {
            const categories = await pool.query("select name from category");
            if (categories.rows.length) {
                const weHaveThisCategory = categories.rows
                    .map((cat) => cat.name.toLowerCase())
                    .includes(newCategory.toLowerCase());
                if (weHaveThisCategory) {
                    throw new Error("Данная категория уже существует");
                } else {
                    const tryToAddCategory = await pool.query(
                        "insert into category (name) values($1)",
                        [newCategory]
                    );
                    if (
                        tryToAddCategory.command === "INSERT" &&
                        tryToAddCategory.rowCount === 1
                    ) {
                        res.status(200).json({ message: "Category created" });
                    }
                }
            }
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Ошибка Создания новой категории" });
        }
    }
    async changeProduct(req: Request, res: Response) {
        const {
            id,
            title,
            description,
            price,
            available,
            isTrend,
            isAdvice,
            img,
            category,
        } = req.body.params.changedProduct;
        try {
            if (req.body.params.changedProduct) {
                //Получаем id категории
                const getCategories = await pool.query(
                    "SELECT * FROM CATEGORY"
                );
                const category_id = getCategoryId(
                    getCategories.rows,
                    category,
                    res
                );
                const oldProduct = await pool.query(
                    "SELECT * FROM PRODUCT WHERE ID = $1",
                    [id]
                );
                const oldProductForCompare = oldProduct.rows[0];
                const newProductForCompare = {
                    id,
                    title,
                    description,
                    price,
                    available,
                    img,
                    category_id,
                };
                function compareObjects(obj1: any, obj2: any) {
                    for (let key in obj1) {
                        if (obj1[key] === obj2[key]) continue;
                        return false;
                    }
                    return true;
                }
                //сравниваем два объекта, и если они не равны, то вносим изменения в таблицу.
                const shouldIChangeValuesInProductTable = !compareObjects(
                    oldProductForCompare,
                    newProductForCompare
                );
                if (shouldIChangeValuesInProductTable) {
                    const newData = await pool.query(
                        "UPDATE PRODUCT SET title=$1, description=$2, price=$3, available=$4, img=$5, category_id=$6 WHERE id=$7",
                        [
                            title,
                            description,
                            price,
                            available,
                            img,
                            category_id,
                            id,
                        ]
                    );
                    if (newData.rowCount === 0) {
                        throw new Error("Ошибка внесения новых данных");
                    }
                }
                const avaiInTrends = await pool.query(
                    "SELECT * FROM TRENDS WHERE PRODUCT_ID = $1",
                    [id]
                );
                const avaiInAdvice = await pool.query(
                    "SELECT * FROM ADVICE WHERE PRODUCT_ID = $1",
                    [id]
                );
                if (!avaiInTrends.rowCount == isTrend) {
                    if (avaiInTrends.rowCount) {
                        await pool.query(
                            "DELETE FROM TRENDS WHERE PRODUCT_ID = $1",
                            [id]
                        );
                    } else {
                        await pool.query(
                            "INSERT INTO TRENDS (PRODUCT_ID) VALUES($1)",
                            [id]
                        );
                    }
                }
                if (!avaiInAdvice.rowCount == isAdvice) {
                    if (avaiInAdvice.rowCount) {
                        await pool.query(
                            "DELETE FROM ADVICE WHERE PRODUCT_ID = $1",
                            [id]
                        );
                    } else {
                        await pool.query(
                            "INSERT INTO ADVICE (PRODUCT_ID) VALUES($1)",
                            [id]
                        );
                    }
                }
                setTimeout(() => {
                    res.status(200).json({ message: "Changes success" });
                }, 1000);
            }
        } catch (error) {
            return res.status(500).json({ message: "Ошибка изменения товара" });
        }
    }
    async getStatic(req: Request, res: Response) {
        try {
            const getStatic = await pool.query(
                "SELECT COUNT(o.id) AS count,(SELECT COUNT(id) FROM users)AS users_count , SUM(op.count * p.price) AS total FROM orders AS o JOIN orders_products AS op ON o.id = op.order_id JOIN product AS p ON op.product_id = p.id WHERE o.status_order_id NOT IN (1, 4)"
            );
            const data = getStatic.rows[0];
            if (data) {
                data.total = transformPrice(data.total);
                setTimeout(() => {
                    res.status(200).json({ data });
                }, 1000);
                // res.status(200).json({ data });
            } else {
                throw new Error("Ошибка в запросе к БД");
            }
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Ошибка получения статистики" });
        }
    }
    async getPaidOrders(req: Request, res: Response) {
        try {
            const paidOrders = await pool.query(
                "SELECT CAST(O.DATE_ORDER AS VARCHAR) AS DATE_ORDER, OP.ORDER_ID, STRING_AGG(CAST(OP.COUNT AS VARCHAR), ',') AS COUNT, STRING_AGG(CAST(OP.PRODUCT_ID AS VARCHAR), ',') AS PRODUCT_ID, STRING_AGG(P.IMG, ',') AS IMG, SUM(OP.COUNT * P.PRICE) AS TOTAL, S.STATUS FROM ORDERS AS O JOIN ORDERS_PRODUCTS AS OP ON O.ID = OP.ORDER_ID JOIN PRODUCT AS P ON P.ID = OP.PRODUCT_ID JOIN STATUS_ORDERS AS S ON O.STATUS_ORDER_ID = S.ID WHERE STATUS = 'Оплачен' GROUP BY O.USERS_ID, O.DATE_ORDER, OP.ORDER_ID, S.STATUS ORDER BY O.DATE_ORDER DESC"
            );
            if (!paidOrders.rows) {
                throw new Error("Ошибка получения оплаченных заказов");
            }
            const data = transformData(paidOrders.rows);
            setTimeout(() => {
                return res.status(200).json({ data });
            }, 1000);
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Ошибка получения оплаченых заказов" });
        }
    }
}

export default new AdminPanelController();
