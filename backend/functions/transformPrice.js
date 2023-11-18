export function transformPrice(price) {
    const number = typeof price === "number" ? price : parseInt(price);
    return number.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
    });
}
