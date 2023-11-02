import OrderItem from "./OrderItem";

function UserOrders() {
    const orders = [
        {
            date_order: new Date(),
            id: 1,
            status: "Получен",
            product_img: [
                "https://via.placeholder.com/600/5e12c6",
                "https://via.placeholder.com/600/5e12c6",
                "https://via.placeholder.com/600/5e12c6",
                "https://via.placeholder.com/600/5e12c6",
                "https://via.placeholder.com/600/5e12c6",
                "https://via.placeholder.com/600/5e12c6",
            ],
        },
        {
            date_order: new Date(),
            id: 2,
            status: "Оплачен",
            product_img: ["https://via.placeholder.com/600/5e12c6"],
        },
        {
            date_order: new Date(),
            id: 3,
            status: "Оплачен",
            product_img: ["https://via.placeholder.com/600/5e12c6"],
        },
        {
            date_order: new Date(),
            id: 4,
            status: "Не оплачен",
            product_img: [
                "https://via.placeholder.com/600/5e12c6",
                "https://via.placeholder.com/600/5e12c6",
            ],
        },
        {
            date_order: new Date(),
            id: 5,
            status: "Получен",
            product_img: ["https://via.placeholder.com/600/5e12c6"],
        },
    ];
    return (
        <div>
            <h2>Заказы</h2>
            <div className="user-orders">
                {orders.map((item, index) => (
                    <OrderItem
                        order={item}
                        images={item.product_img}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}
export default UserOrders;
