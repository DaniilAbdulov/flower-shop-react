import { useParams } from "react-router-dom";
import Loader from "../components/UI/Loader";
import "./Order.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    cancelOrder,
    getOneOrder,
    selectOneOrder,
    selectOneOrderLoading,
} from "../redux/slices/ordersSlice";
import { useEffect } from "react";
import { selectUser } from "../redux/slices/userSlice";
import OrderItemPhotosAndCount from "../components/Cabinet/OrderItemPhotosAndCount";
function Order() {
    const user = useSelector(selectUser);
    const params = useParams();
    const orderId = parseInt(params.id);
    const order = useSelector(selectOneOrder);
    const orderProducts = order?.products ? order.products : false;
    const oneOrderLoading = useSelector(selectOneOrderLoading);
    let cancelationValues = false;
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
    const dispatch = useDispatch();
    function handleCancelButton() {
        dispatch(cancelOrder(orderId));
    }
    useEffect(() => {
        dispatch(getOneOrder(orderId));
    }, [dispatch, orderId]);
    return (
        <div className="payment">
            <div className="order">
                {oneOrderLoading ? (
                    <Loader />
                ) : (
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
                            {orderProducts ? (
                                <>
                                    {orderProducts.map((product) => (
                                        <OrderItemPhotosAndCount
                                            product={product}
                                            key={product.id}
                                        />
                                    ))}
                                </>
                            ) : (
                                <>{""}</>
                            )}
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
                        <button
                            onClick={handlePayButton}
                            className="order__button"
                        >
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
                )}
            </div>
        </div>
    );
}
export default Order;
