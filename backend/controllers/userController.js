const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
        // return res.json({ token });
        return res.json(token);
    }

    async login(req, res, next) {
        const { nickName, password } = req.body;
        // const user = await User.findOne({ where: { email } });
        // if (!user) {
        //     return next(ApiError.internal("Пользователь не найден"));
        // }
        // let comparePassword = bcrypt.compareSync(password, user.password);
        // if (!comparePassword) {
        //     return next(ApiError.internal("Указан неверный пароль"));
        // }

        // const token = generateJwt(id, nickName, email);
        const token = generateJwt(Date.now(), nickName, "m@m");

        return res.json({ token });
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({ token });
    }
}

module.exports = new UserController();
