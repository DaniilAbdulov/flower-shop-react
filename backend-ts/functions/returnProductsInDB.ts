import { pool } from "../db";

export const returnProductsInDB = async (arr: any) => {
    for (const order of arr) {
        await pool.query(
            "UPDATE product SET available = available + $1 WHERE id = $2",
            [order.count, order.product_id]
        );
    }
};
