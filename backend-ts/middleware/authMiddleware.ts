import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request {
            userId: number;
        }
    }
}

export default function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (req.method === "OPTIONS") {
        return next();
    }
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Не авторизован" });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY) as any;
        req.userId = decoded.id;
        return next();
    } catch (e) {
        return res.status(401).json({ message: "Не авторизован" });
    }
}
