export function transformPrice(price: number): string {
    const number = Number(price);
    return number.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
    });
}
