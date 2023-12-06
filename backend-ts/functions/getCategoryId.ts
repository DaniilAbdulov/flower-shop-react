import { Response } from "express";

interface Category {
    id: number;
    name: string;
}

export function getCategoryId(
    getCategories: Category[],
    category: string,
    res: Response
) {
    let categoryId = 0;
    if (!getCategories) {
        return res
            .status(500)
            .json({ message: "Ошибка получения категорий товара" });
    } else {
        categoryId = getCategories.filter(
            (cat: any) => cat.name === category
        )[0].id;
    }
    return Number(categoryId);
}
