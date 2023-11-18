import pool from "../db.js";

class OrdersController {
    async getOrders(req, res, next) {
        const userId = req.user.id;
        try {
            console.log(userId);
            const orders = await pool.query(
                "SELECT O.USERS_ID, CAST(O.DATE_ORDER AS VARCHAR) AS DATE_ORDER, OP.ORDER_ID, OP.COUNT, OP.PRODUCT_ID, P.IMG, (OP.COUNT * P.PRICE) AS TOTAL, S.STATUS FROM ORDERS AS O JOIN ORDERS_PRODUCTS AS OP ON O.ID = OP.ORDER_ID JOIN PRODUCT AS P ON P.ID = OP.PRODUCT_ID JOIN STATUS_ORDERS AS S ON O.STATUS_ORDER_ID = S.ID WHERE O.USERS_ID = $1 ORDER BY OP.ORDER_ID",
                [userId]
            );
            console.log(orders.rows);
            const data = "ku ku epta";
            setTimeout(() => {
                return res.status(200).json({ data });
            }, 2000);
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
