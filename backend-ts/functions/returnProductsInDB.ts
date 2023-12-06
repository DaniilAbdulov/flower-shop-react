import { pool } from "../db";
interface ProductToReturn {
    product_id: number;
    count: number;
}
export const returnProductsInDB = async (arr: ProductToReturn[]) => {
    for (const order of arr) {
        await pool.query(
            "UPDATE product SET available = available + $1 WHERE id = $2",
            [order.count, order.product_id]
        );
    }
};
