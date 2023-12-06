import { pool } from "../db";
interface ProductForRepeat {
    product_id: number;
    count: number;
    isavailable: boolean;
}

export const addProducts = async (userId: number, arr: ProductForRepeat[]) => {
    for (const order of arr) {
        await pool.query(
            "insert into carts_users (users_id, product_id, count) values($1, $2, $3)",
            [userId, order.product_id, order.count]
        );
    }
};
