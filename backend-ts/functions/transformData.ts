import { transformPrice } from "./transformPrice";
import { formatDate } from "./formatDate";
export function transformData(data: any) {
    const newArr = data.map((item: any) => {
        item.date_order = formatDate(item.date_order);
        item.total = transformPrice(item.total);

        if (item.count.includes(",")) {
            const countOfElements = item.count.split(",").length;
            item.products = [];
            for (let i = 0; i < countOfElements; i++) {
                const newData = {
                    id: parseInt(item.product_id.split(",")[i]),
                    img: item.img.split(",")[i],
                    count: item.count.split(",")[i],
                };
                item.products.push(newData);
            }
            delete item.product_id;
            delete item.img;
            delete item.count;
        } else {
            item.products = [];
            const newData = {
                id: item.product_id,
                img: item.img,
                count: item.count,
            };
            item.products.push(newData);
            delete item.product_id;
            delete item.img;
            delete item.count;
        }
        return item;
    });
    return newArr;
}
