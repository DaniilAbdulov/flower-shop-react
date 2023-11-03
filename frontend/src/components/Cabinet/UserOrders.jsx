import OrderItem from "./OrderItem";
import orders from "../../data/orders";
function UserOrders() {
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
