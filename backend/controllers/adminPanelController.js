import pool from "../db.js";

class AdminPanelController {
    async createProduct(req, res, next) {
        const {
            title,
            description,
            price,
            avaiable,
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
                let categoryId = 0;
                if (!getCategories.rows) {
                    return res
                        .status(500)
                        .json({ message: "Ошибка получения категорий товара" });
                } else {
                    categoryId = getCategories.rows.filter(
                        (cat) => cat.name === category
                    )[0].id;
                }
                //добавляем новый товар в таблицу
                const addInProductTable = await pool.query(
                    "INSERT INTO PRODUCT (title,description,price,available,img,category_id) values($1,$2,$3,$4,$5,$6)",
                    [title, description, price, avaiable, img, categoryId]
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
            return res.status(200).json({ message: "Товар создан" });
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
            console.log(deleteProduct.command);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Ошибка удаления товара" });
        }
    }
}

export default new AdminPanelController();
