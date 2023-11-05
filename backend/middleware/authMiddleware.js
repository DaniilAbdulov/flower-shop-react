const jwt = require("jsonwebtoken");
const pool = require("../db");
module.exports = function (req, res, next) {
    console.log("Я ЗДЕЕЕЕСЬ !!!!");
    pool.query(
        "SELECT * FROM users WHERE first_name = 'Daniil'",
        (err, result) => {
            if (err) {
                console.error("Ошибка выполнения запроса", err);
            } else {
                console.log("Результат запроса:", result.rows);
            }
        }
    );
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Не авторизован" });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json({ message: "Не авторизован" });
    }
};
