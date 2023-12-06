export function parseUserId(userId: number | undefined): number {
    if (typeof userId === "number") {
        return userId;
    } else {
        return 0;
    }
}
