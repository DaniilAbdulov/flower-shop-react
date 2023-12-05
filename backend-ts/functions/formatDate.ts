export function formatDate(d: string): string {
    const date = new Date(d);
    const result = date.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return result;
}
