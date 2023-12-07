export function checkData(
    name: string,
    phone: number,
    message: number
): string {
    const stringPhoneNumber = String(phone);
    if (!name || !phone || !message) {
        return "Некорректные данные";
    }
    if (name.length <= 1) {
        return "Некорректное имя";
    }
    if (stringPhoneNumber.length !== 11) {
        return "Некорректная длина номера";
    }
    if (
        !(
            stringPhoneNumber.startsWith("89") ||
            stringPhoneNumber.startsWith("79")
        )
    ) {
        return "Номер должен начинаться с 89 или с 79";
    }
    return "Success";
}
