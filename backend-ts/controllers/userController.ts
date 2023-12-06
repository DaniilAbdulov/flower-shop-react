import { Request, Response } from "express";
import { pool } from "../db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { formatDate } from "../functions/formatDate";
const generateJwt = (id: number, email: string, role: string) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
        expiresIn: "1h",
    });
};

class UserController {
    async registration(req: Request, res: Response) {
        const { firstName, lastName, nickName, email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Некорректный email или password" });
        }
        try {
            const currentEmail = await pool.query(
                "SELECT id from USERS WHERE email = $1",
                [email]
            );
            if (currentEmail.rowCount) {
                return res.status(400).json({
                    message: "Пользователь с таким email уже существует",
                });
            }
            const currentNickName = await pool.query(
                "SELECT id from USERS WHERE nickname = $1",
                [nickName]
            );
            if (currentNickName.rowCount) {
                return res.status(400).json({
                    message: "Пользователь с таким ником уже существует",
                });
            }

            const hashPassword: string = await bcrypt.hash(password, 5);
            const addUser = await pool.query(
                "INSERT INTO USERS (first_name, last_name, nickname, email, password, created_at, updated_at, role, user_img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
                [
                    firstName,
                    lastName,
                    nickName,
                    email,
                    hashPassword,
                    new Date(),
                    new Date(),
                    "USER",
                    "",
                ]
            );
            if (addUser.rowCount) {
                const user = addUser.rows[0];
                const token: string = generateJwt(user.id, email, "USER");
                user.created_at = formatDate(user.created_at);
                user.updated_at = formatDate(user.updated_at);
                return res.json({ token, user });
            }
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async login(req: Request, res: Response) {
        try {
            const { nickName, password } = req.body;
            if (typeof nickName !== "string" && typeof password !== "string") {
                throw new Error("Некорректные никнейм и пароль");
            }
            const findUser = await pool.query(
                "SELECT * FROM users WHERE nickname = $1",
                [nickName]
            );
            if (findUser.rowCount === 0) {
                res.status(404).json({ message: "Нет такого пользователя" });
                return;
            }
            const user = findUser.rows[0];
            user.created_at = formatDate(user.created_at);
            user.updated_at = formatDate(user.updated_at);
            if (!bcrypt.compareSync(password, user.password)) {
                res.status(404).json({ message: "Неверный пароль" });
                return;
            }
            const token: string = generateJwt(user.id, user.email, user.role);
            return res.json({ token, user });
        } catch (error) {
            res.status(500).json({ message: "Внутренняя ошибка сервера" });
            return;
        }
    }
    async check(req: Request, res: Response) {
        const userId = req.userId;
        const findUser = await pool.query("SELECT * FROM users WHERE id = $1", [
            userId,
        ]);
        if (!findUser.rowCount) {
            return res.status(404).json({ message: "Проблема с токеном" });
        }
        const user = findUser.rows[0];
        user.created_at = formatDate(user.created_at);
        user.updated_at = formatDate(user.updated_at);
        const token: string = generateJwt(user.id, user.email, user.role);
        return res.json({ token, user });
    }
}

export default new UserController();
