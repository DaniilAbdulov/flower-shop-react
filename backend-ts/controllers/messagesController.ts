import { Request, Response } from "express";
import { pool } from "../db";
import { checkData } from "../functions/checkData";
import { formatDate } from "../functions/formatDate";
class MessagesController {
    async createMessage(req: Request, res: Response) {
        try {
            const time = new Date();
            const { name, phone, message } = req.body.params.newMessage;
            const resOfCheckData = checkData(name, phone, message);
            if (resOfCheckData !== "Success") {
                throw new Error(resOfCheckData);
            } else {
                const stringPhoneNumber = String(phone);
                const query = {
                    text: "insert into messages (date_time, name, number, message) values ($1, $2, $3, $4);",
                    values: [time, name, stringPhoneNumber, message],
                };
                const tryToCreateMessage = await pool.query(query);
                if (
                    tryToCreateMessage.command === "INSERT" &&
                    tryToCreateMessage.rowCount === 1
                ) {
                    return res
                        .status(200)
                        .json({ message: "Сообщение отправлено" });
                } else {
                    throw new Error("Ошибка отправки сообщения");
                }
            }
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
    async getMessages(req: Request, res: Response) {
        try {
            const query = {
                text: "SELECT * FROM MESSAGES ORDER BY DATE_TIME DESC",
            };
            const tryToGetAllMessages = await pool.query(query);
            if (tryToGetAllMessages.command === "SELECT") {
                const data = tryToGetAllMessages.rows;
                for (let i = 0; i < data.length; i++) {
                    data[i].date_time = formatDate(data[i].date_time);
                }
                return res.status(200).json({ data });
            } else {
                throw new Error("Ошибка получения сообщений");
            }
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
    async deleteMessage(req: Request, res: Response) {
        try {
            const messageId = Number(req.query.id);

            if (!messageId || typeof messageId !== "number") {
                throw new Error("Некорректный id сообщения");
            }
            const query = {
                text: "DELETE FROM MESSAGES WHERE ID = $1",
                values: [messageId],
            };
            const tryToDeleteMessage = await pool.query(query);
            if (
                tryToDeleteMessage.command === "DELETE" &&
                tryToDeleteMessage.rowCount === 1
            ) {
                return res.status(200).json({ message: "Сообщение удалено" });
            } else {
                throw new Error("Ошибка удаления сообщения");
            }
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
}

export default new MessagesController();
