export function formatDate(d: string): string {
    const date = new Date(d);
    const result = date.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
    return result;
}
