import { useParams } from "react-router-dom";
import orders from "../data/orders";
import "./Order.scss";
function Order() {
    const params = useParams();
    const orderId = params.id;
    const order = orders.filter((item) => item.id == orderId)[0];
    let cancelationValues = false;
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
        const year = d.getFullYear();
        return `${date} ${month} ${year}`;
    }
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
    const new_date_order = getData(order.date_order);
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
                            Дата заказа: {new_date_order}
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
                        {order.product_img.map((photo, index) => (
                            <div className="order__image-container" key={index}>
                                <img src={photo} alt="Изображение" />
                            </div>
                        ))}
                    </div>
                    <div className="order__user">
                        <h2>Получатель:</h2>
                        <p>
                            <span>Daniil</span> <span>Abdulov</span>
                        </p>
                        <p>user@yandex.ru</p>
                    </div>
                    <div className="order__total-price order__user">
                        <h2>Сумма: 18000</h2>
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
