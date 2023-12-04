import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCreateOrderLoading,
    selectNewOrderId,
    selectOrderPaid,
} from "../redux/slices/ordersSlice";
import PaymentOrder from "../components/Payment/PaymentOrder";
import "./Payment.scss";
import FinalPay from "../components/Payment/FinalPay";
import PaySuccess from "../components/Payment/PaySuccess";
import Loader from "../components/UI/Loader";
import { clearCart, clearCartTotal } from "../redux/slices/cartSlice";
function Payment() {
    const createOrderLoading = useSelector(selectCreateOrderLoading);
    const newOrderId = useSelector(selectNewOrderId);
    const orderPaid = useSelector(selectOrderPaid);
    const dispatch = useDispatch();
    useEffect(() => {
        if (newOrderId) {
            dispatch(clearCart());
            dispatch(clearCartTotal());
        }
    }, [dispatch, newOrderId]);
    return (
        <div>
            <div className="wrapper">
                <div className="payment">
                    <div
                        className={`payment__wrapper ${
                            createOrderLoading ? "payment__wrapper-pending" : ""
                        } `}
                    >
                        {!createOrderLoading && !newOrderId && <PaymentOrder />}
                        {createOrderLoading && (
                            <>
                                <h2>Создаем заказ</h2>
                                <Loader />
                            </>
                        )}
                        {newOrderId && !orderPaid ? <FinalPay /> : null}
                        {orderPaid && <PaySuccess />}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Payment;
