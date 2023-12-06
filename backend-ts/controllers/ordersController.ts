import { Request, Response } from "express";
import { pool } from "../db";
import { returnProductsInDB } from "../functions/returnProductsInDB";
import { transformData } from "../functions/transformData";
import { transformPrice } from "../functions/transformPrice";

class OrdersController {
    async getOrders(req: Request, res: Response) {
        const userId: number = req.userId;
        try {
            const orders = await pool.query(
                "SELECT CAST(O.DATE_ORDER AS VARCHAR) AS DATE_ORDER, OP.ORDER_ID, STRING_AGG(CAST(OP.COUNT AS VARCHAR), ',') AS COUNT, STRING_AGG(CAST(OP.PRODUCT_ID AS VARCHAR), ',') AS PRODUCT_ID, STRING_AGG(P.IMG, ',') AS IMG, SUM(OP.COUNT * P.PRICE) AS TOTAL, S.STATUS FROM ORDERS AS O JOIN ORDERS_PRODUCTS AS OP ON O.ID = OP.ORDER_ID JOIN PRODUCT AS P ON P.ID = OP.PRODUCT_ID JOIN STATUS_ORDERS AS S ON O.STATUS_ORDER_ID = S.ID WHERE O.USERS_ID = $1 GROUP BY O.USERS_ID, O.DATE_ORDER, OP.ORDER_ID, S.STATUS ORDER BY O.DATE_ORDER DESC",
                [userId]
            );
            let data = "";
            if (orders.rows) {
                data = transformData(orders.rows);
            }
            return res.status(200).json({ data });
        } catch (error) {
            const message = error.message;
            return res.status(500).json({
                message,
            });
        }
    }
    async getOneOrder(req: Request, res: Response) {
        const orderId: number = Number(req.query.orderId);
        if (!orderId) {
            throw new Error("Некорректные данные");
        }
        try {
            const order = await pool.query(
                "SELECT U.FIRST_NAME, U.LAST_NAME, U.EMAIL, CAST(O.DATE_ORDER AS VARCHAR) AS DATE_ORDER, OP.ORDER_ID, STRING_AGG(CAST(OP.COUNT AS VARCHAR), ',') AS COUNT, STRING_AGG(CAST(OP.PRODUCT_ID AS VARCHAR), ',') AS PRODUCT_ID, STRING_AGG(P.IMG, ',') AS IMG, SUM(OP.COUNT * P.PRICE) AS TOTAL, S.STATUS FROM ORDERS AS O JOIN ORDERS_PRODUCTS AS OP ON O.ID = OP.ORDER_ID JOIN PRODUCT AS P ON P.ID = OP.PRODUCT_ID JOIN STATUS_ORDERS AS S ON O.STATUS_ORDER_ID = S.ID JOIN USERS AS U ON O.USERS_ID = U.ID WHERE ORDER_ID = $1 GROUP BY U.ID, O.DATE_ORDER, OP.ORDER_ID, S.STATUS ORDER BY OP.ORDER_ID",
                [orderId]
            );
            let data = "";
            if (order.rows) {
                data = transformData(order.rows);
            }
            return res.status(200).json({ data });
        } catch (error) {
            const message = error.message;
            return res.status(500).json({
                message,
            });
        }
    }
    async getOrdersInfo(req: Request, res: Response) {
        const userId: number = req.userId;
        try {
            const ordersInfo = await pool.query(
                "SELECT count(o.id), sum(op.count*p.price) as total FROM orders AS o JOIN orders_products AS op ON o.id = op.order_id JOIN product as p on op.product_id = p.id where o.users_id = $1 AND O.STATUS_ORDER_ID IN(2,3) group by o.users_id",
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
    async createOrder(req: Request, res: Response) {
        const userId: number = req.userId;
        const time = new Date();
        const orders = req.body.params.orders;
        let newOrderId = 0;
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
                newOrderId = idOfAddedOrder.rows[0].id;
            }
            for (let i = 0; i < orders.length; i++) {
                await pool.query(
                    "insert into orders_products (order_id,product_id,count) values ($1,$2,$3)",
                    [newOrderId, orders[i].productId, orders[i].count]
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
            return res
                .status(200)
                .json({ newOrderId, message: "order created" });
        } catch (error) {
            const message = error.message;
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
    async cancelOrder(req: Request, res: Response) {
        const userId: number = req.userId;
        const orderId = parseInt(req.body.params.orderId);
        if (!userId || !orderId) {
            throw new Error("Некорректные данные");
        }
        try {
            const doesUserHaveThisOrder = await pool.query(
                "SELECT COUNT(*) FROM orders WHERE id = $1 AND users_id = $2 AND status_order_id != 4;",
                [orderId, userId]
            );

            if (doesUserHaveThisOrder.rows[0].count === 1) {
                res.status(400).json({
                    message: "Order`s status is not `cancel`",
                });
            } else {
                const changeStatusOfOrder = await pool.query(
                    "update orders set status_order_id = 4 where id = $1 and users_id = $2;",
                    [orderId, userId]
                );
                if (!changeStatusOfOrder.rowCount) {
                    res.status(400).json({
                        message:
                            "Something went wrong with change status operation",
                    });
                } else {
                    const productsToReturn = await pool.query(
                        "SELECT op.product_id, op.count FROM orders AS o JOIN orders_products AS op ON o.id = op.order_id WHERE o.id = $1 AND o.users_id = $2",
                        [orderId, userId]
                    );
                    if (!productsToReturn.rowCount) {
                        throw new Error("Ошибка возврата товаров в БД");
                    }
                    await returnProductsInDB(productsToReturn.rows);
                    res.status(200).json({ message: "Status changed" });
                }
            }
        } catch (error) {
            const message = error.message;
            return res.status(500).json({
                message,
            });
        }
    }
    async issuedOrder(req: Request, res: Response) {
        const orderId: number = parseInt(req.body.params.orderId);
        if (!orderId) {
            throw new Error("Некорректные данные");
        }
        try {
            const changeStatusOfOrder = await pool.query(
                "update orders set status_order_id = 2 where id = $1",
                [orderId]
            );
            if (!changeStatusOfOrder.rowCount) {
                res.status(400).json({
                    message:
                        "Something went wrong with change status operation",
                });
            } else {
                res.status(200).json({ message: "Status changed" });
            }
        } catch (error) {
            const message = error.message;
            return res.status(500).json({
                message,
            });
        }
    }
    async payOrder(req: Request, res: Response) {
        const orderId: number = parseInt(req.body.params.orderId);
        if (!orderId) {
            throw new Error("Некорректные данные");
        }
        try {
            const changeStatusOfOrder = await pool.query(
                "update orders set status_order_id = 3 where id = $1",
                [orderId]
            );
            if (!changeStatusOfOrder.rowCount) {
                res.status(400).json({
                    message:
                        "Something went wrong with change status operation",
                });
            }
            res.status(200).json({ message: "Status changed" });
        } catch (error) {
            const message = error.message;
            return res.status(500).json({
                message,
            });
        }
    }
}

export default new OrdersController();
