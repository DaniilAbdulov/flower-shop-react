import pool from "../db.js";
import { transformData } from "../functions/transformData.js";
class OrdersController {
    async getOrders(req, res, next) {
        const userId = req.user.id;
        try {
            const orders = await pool.query(
                "SELECT CAST(O.DATE_ORDER AS VARCHAR) AS DATE_ORDER, OP.ORDER_ID, STRING_AGG(CAST(OP.COUNT AS VARCHAR), ',') AS COUNT, STRING_AGG(CAST(OP.PRODUCT_ID AS VARCHAR), ',') AS PRODUCT_ID, STRING_AGG(P.IMG, ',') AS IMG, SUM(OP.COUNT * P.PRICE) AS TOTAL, S.STATUS FROM ORDERS AS O JOIN ORDERS_PRODUCTS AS OP ON O.ID = OP.ORDER_ID JOIN PRODUCT AS P ON P.ID = OP.PRODUCT_ID JOIN STATUS_ORDERS AS S ON O.STATUS_ORDER_ID = S.ID WHERE O.USERS_ID = $1 GROUP BY O.USERS_ID, O.DATE_ORDER, OP.ORDER_ID, S.STATUS ORDER BY OP.ORDER_ID",
                [userId]
            );
            let data = "";
            if (orders.rows) {
                data = transformData(orders.rows);
            }
            setTimeout(() => {
                return res.status(200).json({ data });
            }, 1000);
            // return res.status(200).json({ data, cartTotal });
        } catch (error) {
            const message = error.message;
            return res.status(500).json({
                message,
            });
        }
    }
}

export default new OrdersController();
