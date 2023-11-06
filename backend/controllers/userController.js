const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db");
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
        // const candidate = await User.findOne({where: {email}})
        // if (candidate) {
        //     return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        // }
        const hashPassword = await bcrypt.hash(password, 5);
        // const user = await User.create({email, role, password: hashPassword})
        // const basket = await Basket.create({userId: user.id})
        const token = generateJwt(id, nickName, email);
        return res.json(token);
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
            if (!comparePassword) {
                console.log("Неверный пароль");
                return res.status(404).json({ message: "Неверный пароль" });
            }
            const token = generateJwt(Date.now(), nickName, user.email);
            return res.json({ token, user });
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ message: "Внутренняя ошибка сервера" });
        }
    }
    // const user = await User.findOne({ where: { email } });
    // if (!user) {
    //     return next(ApiError.internal("Пользователь не найден"));
    // }
    // let comparePassword = bcrypt.compareSync(password, user.password);
    // if (!comparePassword) {
    //     return next(ApiError.internal("Указан неверный пароль"));
    // }

    // const token = generateJwt(id, nickName, email);

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        // pool.query("SELECT * FROM users WHERE user.first_name = 'Daniil'", (err, result) => {
        //     if (err) {
        //         console.error("Ошибка выполнения запроса", err);
        //     } else {
        //         console.log("Результат запроса:", result);
        //     }
        // });
        return res.json({ token });
    }
}

module.exports = new UserController();
