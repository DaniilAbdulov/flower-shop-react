import { useParams } from "react-router-dom";
import orders from "../data/orders";
import "./Order.scss";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, selectOrdersData } from "../redux/slices/ordersSlice";
import { useEffect } from "react";
import { selectUser } from "../redux/slices/userSlice";
function Order() {
    const ordersData = useSelector(selectOrdersData);
    const user = useSelector(selectUser);
    const params = useParams();
    const orderId = parseInt(params.id);

    const order = ordersData.filter((item) => item.order_id === orderId)[0];

    let cancelationValues = false;
    console.log(user);

    function getButton() {
        if (
            order.status === "Получен" ||
            order.status === "Оплачен" ||
            order.status === "Отменен"
        ) {
            return "Повторить заказ";
        } else if (order.status === "Создан") {
            cancelationValues = true;
            return "Оплатить";
        } else if (order.status === "") {
            return;
        }
    }

    const buttonValue = getButton();
    function handlePayButton() {
        alert(`Настрой логику перехода на страницу оплаты`);
    }
    function handleCancelButton() {
        alert(`Order with id ${orderId} deleted`);
    }
    return (
        <div className="payment">
            <div className="order">
                <div className="order__card">
                    <div className="order__text">
                        <h2>Заказ № {orderId}</h2>
                        <p className="order__text">
                            Дата заказа: {order.date_order}
                        </p>
                        {cancelationValues && (
                            <>
                                <p className="order__text-warning">
                                    Ожидает оплаты
                                </p>
                            </>
                        )}
                        <p className="order__text-status">
                            <span
                                style={{
                                    backgroundColor: cancelationValues
                                        ? "#0000FF"
                                        : "#aca6a6",
                                }}
                            >
                                {order.status}
                            </span>
                        </p>
                    </div>

                    <div className="order__image-wrapper">
                        {order.products.map((product) => (
                            <div
                                className="order__image-container"
                                key={product.id}
                            >
                                <img src={product.img} alt="Изображение" />
                                <p>x{product.count}</p>
                            </div>
                        ))}
                    </div>
                    <div className="order__user">
                        <h2>Получатель:</h2>
                        <p>
                            <span>{user.first_name}</span>{" "}
                            <span>{user.last_name}</span>
                        </p>
                        <p>{user.email}</p>
                    </div>
                    <div className="order__total-price order__user">
                        <h2>Сумма: {order.total}</h2>
                    </div>
                    <button onClick={handlePayButton} className="order__button">
                        {buttonValue}
                    </button>
                    {cancelationValues && (
                        <>
                            <button
                                onClick={handleCancelButton}
                                className="order__button-cancel"
                            >
                                Отменить заказ
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Order;
/*
Передаваемый оюъект должен иметь следуюшую структуру:
order
{
    id, число
    date_order, таймстамп
    product_img, массив из ссылок на фото
    status, Получен-Оплачен-Отменен-Создан
    user:{
        firstName,
        lastName,
        email,
    }
    total_price: int
}


*/
