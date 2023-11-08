import { NavLink } from "react-router-dom";
import "./OrderItem.scss";
function OrderItem({ order }) {
    const months = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
    ];
    function getData(d) {
        const date = d.getDate();
        const month = months[d.getMonth()];
        return `${date} ${month}`;
    }
    const new_date_order = getData(order.date_order);
    return (
        <div>
            <div className="order-item">
                <div className="order-item__row">
                    <div className="order-item__body">
                        <div className="order-item__text">
                            <h2>Заказ от {new_date_order}</h2>
                            <NavLink to={`/order/${order.id}`}>
                                № {order.id}
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
                                    {order.status}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="order__image-wrapper">
                        {order.product_img.map((photo, index) => (
                            <div className="order__image-container" key={index}>
                                <img src={photo} alt="Изображение" />
                                <p>x200</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OrderItem;
