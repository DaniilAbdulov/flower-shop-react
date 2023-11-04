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
            <div className="order">
                <div className="order__row">
                    <div className="order__body">
                        <div className="order__text">
                            <h2>Заказ от {new_date_order}</h2>
                            <NavLink to={`/order/${order.id}`}>
                                № {order.id}
                            </NavLink>
                        </div>
                        <div className="order__text">
                            <h2>Статус заказа</h2>
                            <div className="order__text-status">
                                <span>{order.status}</span>
                            </div>
                        </div>
                    </div>
                    <ul className="order__images">
                        {order.product_img.map((item, index) => (
                            <li className="order__img" key={index}>
                                <img src={item} alt="" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default OrderItem;
