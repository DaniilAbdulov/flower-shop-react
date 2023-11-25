import pool from "../db.js";
import { getCategoryId } from "../functions/getCategoryId.js";

class AdminPanelController {
    async createProduct(req, res, next) {
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
            if (req.body.params.newProduct) {
                //Получаем id категории
                const getCategories = await pool.query(
                    "SELECT * FROM CATEGORY"
                );
                const categoryId = getCategoryId(getCategories, category);
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
            }
            return res.status(200).json({ message: "Product created" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Ошибка создания товара" });
        }
    }
    async deleteProduct(req, res, next) {
        const productId = req.query.productId;
        try {
            const deleteProduct = await pool.query(
                "DELETE FROM PRODUCT WHERE ID = $1",
                [productId]
            );
            if (!deleteProduct.command === "DELETE") {
                throw new Error("Not deleted");
            }
            setTimeout(() => {
                res.status(200).json({ message: "Deleted success" });
            }, 2000);
            // res.status(200).json({ message: "Deleted success" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Ошибка удаления товара" });
        }
    }
    async changeProduct(req, res, next) {
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
                const category_id = getCategoryId(getCategories, category);
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
                function compareObjects(obj1, obj2) {
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
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Ошибка изменения товара" });
        }
    }
}

export default new AdminPanelController();
