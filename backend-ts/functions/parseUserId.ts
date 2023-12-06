export function parseUserId(userId: number | undefined): number {
    if (typeof userId === "number" && userId > 0) {
        return userId;
    } else {
        return 0;
    }
}
