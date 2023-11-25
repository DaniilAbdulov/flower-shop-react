import { NavLink } from "react-router-dom";
import "./OrderItem.scss";
function OrderItem({ order }) {
    const { date_order, order_id, products, status } = order;
    return (
        <div>
            <div className="order-item">
                <div className="order-item__row">
                    <div className="order-item__body">
                        <div className="order-item__text">
                            <h2>Заказ от {date_order}</h2>
                            <NavLink to={`/orders/${order_id}`}>
                                № {order_id}
                            </NavLink>
                        </div>
                        <div className="order-item__text">
                            <h2>Статус заказа</h2>
                            <div className="order__text-status">
                                <span
                                    style={{
                                        backgroundColor:
                                            order.status === "Создан"
                                                ? "#0000FF"
                                                : "#aca6a6",
                                    }}
                                >
                                    {status}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="order__image-wrapper">
                        {products.map((product) => (
                            <div
                                className="order__image-container"
                                key={product.id}
                            >
                                <img src={product.img} alt="Изображение" />
                                <p>x{product.count}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OrderItem;
