import pool from "../db.js";
import { transformData } from "../functions/transformData.js";
import { transformPrice } from "../functions/transformPrice.js";
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
    async getOrdersInfo(req, res, next) {
        const userId = req.user.id;
        try {
            const ordersInfo = await pool.query(
                "SELECT count(o.id), sum(op.count*p.price) as total FROM orders AS o JOIN orders_products AS op ON o.id = op.order_id JOIN product as p on op.product_id = p.id where o.users_id = $1 AND O.STATUS_ORDER_ID != 1 group by o.users_id",
                [userId]
            );
            if (ordersInfo.rowCount === 0) {
                res.status(200).json({});
            } else {
                const data = ordersInfo.rows[0];
                data.total = transformPrice(data.total);
                res.status(200).json({ data });
            }
        } catch (error) {
            const message = error.message;
            return res.status(500).json({
                message,
            });
        }
    }
    async createOrder(req, res, next) {
        const userId = req.user.id;
        const time = new Date();
        const orders = req.body.params.orders;
        let idOfOrder = 0;
        try {
            const createOrder = await pool.query(
                "insert into orders (users_id,date_order,status_order_id) values ($1,$2,$3)",
                [userId, time, 1]
            );
            if (createOrder.rowCount === 1) {
                const idOfAddedOrder = await pool.query(
                    "select id from orders where date_order = $1",
                    [time]
                );
                idOfOrder = idOfAddedOrder.rows[0].id;
            }
            for (let i = 0; i < orders.length; i++) {
                await pool.query(
                    "insert into orders_products (order_id,product_id,count) values ($1,$2,$3)",
                    [idOfOrder, orders[i].productId, orders[i].count]
                );
                await pool.query(
                    "UPDATE product SET available = available - $1 WHERE id = $2",
                    [orders[i].count, orders[i].productId]
                );
                await pool.query(
                    "DELETE FROM carts_users where users_id = $1",
                    [userId]
                );
            }
            setTimeout(() => {
                return res.status(200).json({ message: "order created" });
            }, 2000);
            // return res.status(200).json({ message: "order created" });
        } catch (error) {
            const message = error.message;
            console.log(message);
            if (message.includes("available")) {
                return res.status(500).json({
                    message: "Количества товара не достаточно для заказа",
                });
            }
            return res.status(500).json({
                message,
            });
        }
    }
}

export default new OrdersController();
