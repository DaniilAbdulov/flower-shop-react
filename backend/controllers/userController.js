import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db.js";
const generateJwt = (id, nickName, email) => {
    return jwt.sign({ id, nickName, email }, process.env.SECRET_KEY, {
        expiresIn: "24h",
    });
};

class UserController {
    async registration(req, res, next) {
        const { id, firstName, lastName, nickName, email, password } = req.body;
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

            const hashPassword = await bcrypt.hash(password, 5);
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
                const token = generateJwt(addUser.rows[0].id, nickName, "USER");
                const user = addUser.rows[0];
                return res.json({ token, user });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async login(req, res, next) {
        try {
            const { nickName, password } = req.body;
            const findUser = await pool.query(
                "SELECT * FROM users WHERE nickname = $1",
                [nickName]
            );
            if (!findUser.rowCount) {
                res.status(404).json({ message: "Нет такого пользователя" });
                return;
            }
            const user = findUser.rows[0];
            let comparePassword = password === user.password;
            // let comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                res.status(404).json({ message: "Неверный пароль" });
                return;
            }
            const token = generateJwt(user.id, nickName, user.role);
            return res.json({ token, user });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Внутренняя ошибка сервера" });
            return;
        }
    }
    async check(req, res, next) {
        const findUser = await pool.query("SELECT * FROM users WHERE id = $1", [
            req.user.id,
        ]);
        if (!findUser.rowCount) {
            return res.status(404).json({ message: "Проблема с токеном" });
        }
        const user = findUser.rows[0];
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token, user });
    }
}

export default new UserController();
