import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db";
const generateJwt = (id, nickName, email) => {
    return jwt.sign({ id, nickName, email }, process.env.SECRET_KEY, {
        expiresIn: "24h",
    });
};

class UserController {
    async registration(req, res, next) {
        console.log(req.body);
        const { id, firstName, lastName, nickName, email, password } = req.body;
        if (!email || !password) {
            return "Некорректный email или password";
        }
        const currentEmail = await pool.query(
            "SELECT id from USERS WHERE email = $1",
            [email]
        );
        if (currentEmail.rowCount) {
            console.log("Пользователь с такиим email уже существует");
            return res.status(404).json({
                message: "Пользователь с такиим email уже существует",
            });
        }
        const currentNickName = await pool.query(
            "SELECT id from USERS WHERE nickname = $1",
            [nickName]
        );
        if (currentNickName.rowCount) {
            console.log("Пользователь с такиим ником уже существует");
            return res.status(404).json({
                message: "Пользователь с такиим ником уже существует",
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
            const token = generateJwt(id, nickName, "USER");
            const user = addUser.rows[0];
            return res.json({ token, user });
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
                console.log("Нет такого пользователя");
                return res
                    .status(404)
                    .json({ message: "Нет такого пользователя" });
            }
            const user = findUser.rows[0];
            let comparePassword = password === user.password;
            // let comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                console.log("Неверный пароль");
                return res.status(404).json({ message: "Неверный пароль" });
            }
            const token = generateJwt(user.id, nickName, user.role);
            return res.json({ token, user });
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ message: "Внутренняя ошибка сервера" });
        }
    }
    async check(req, res, next) {
        const findUser = await pool.query("SELECT * FROM users WHERE id = $1", [
            req.user.id,
        ]);
        if (!findUser.rowCount) {
            console.log("Нет такого пользователя");
            return res.status(404).json({ message: "Нет такого пользователя" });
        }
        const user = findUser.rows[0];
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token, user });
    }
}

export default new UserController();
