import { useParams } from "react-router-dom";
import Loader from "../components/UI/Loader";
import "./Order.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    cancelOrder,
    getOneOrder,
    issuedOrder,
    payOrder,
    selectOneOrder,
    selectOneOrderLoading,
} from "../redux/slices/ordersSlice";
import { useEffect } from "react";
import { selectIsAdmin, selectUser } from "../redux/slices/userSlice";
import OrderItemPhotosAndCount from "../components/Cabinet/OrderItemPhotosAndCount";
import { createNewCartDataFromOrder } from "../redux/slices/cartSlice";
function Order() {
    const user = useSelector(selectUser);
    const isAdmin = useSelector(selectIsAdmin);
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
        if (buttonValue === "Повторить заказ") {
            dispatch(createNewCartDataFromOrder(orderId));
        }
        if (buttonValue === "Оплатить") {
            dispatch(payOrder(orderId));
        }
    }
    const dispatch = useDispatch();
    function cancelationButtonHandler() {
        dispatch(cancelOrder(orderId));
    }
    function issuedButtonHandler() {
        dispatch(issuedOrder(orderId));
    }
    useEffect(() => {
        dispatch(getOneOrder(orderId));
    }, [dispatch, orderId, user]);
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
                            ) : null}
                        </div>
                        <div className="order__user">
                            <h2>Получатель:</h2>
                            <p>
                                <span>{order.first_name}</span>{" "}
                                <span>{order.last_name}</span>
                            </p>
                            <p>{order.email}</p>
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
                                    onClick={cancelationButtonHandler}
                                    className="order__button-cancel"
                                >
                                    Отменить заказ
                                </button>
                            </>
                        )}
                        {!cancelationValues &&
                            isAdmin &&
                            order.status === "Оплачен" && (
                                <>
                                    <button
                                        onClick={issuedButtonHandler}
                                        className="order__button"
                                    >
                                        Заказ выдан
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
