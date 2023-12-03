import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCreateOrderLoading,
    selectNewOrderId,
} from "../redux/slices/ordersSlice";
import PaymentOrder from "../components/Payment/PaymentOrder";
import "./Payment.scss";
import FinalPay from "../components/Payment/FinalPay";
import PaySuccess from "../components/Payment/PaySuccess";
import Loader from "../components/UI/Loader";
import { clearCart, clearCartTotal } from "../redux/slices/cartSlice";
function Payment() {
    const [stage, setStage] = useState("review");
    const createOrderLoading = useSelector(selectCreateOrderLoading);
    const newOrderId = useSelector(selectNewOrderId);
    const dispatch = useDispatch();
    function changeStage(value) {
        setStage(value);
    }
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
                        {!createOrderLoading && !newOrderId && (
                            <PaymentOrder setNewStage={changeStage} />
                        )}

                        {createOrderLoading && (
                            <>
                                <h2>Создаем заказ</h2>
                                <Loader />
                            </>
                        )}
                        {!createOrderLoading &&
                            newOrderId &&
                            stage !== "paySuccess" && (
                                <FinalPay setNewStage={changeStage} />
                            )}
                        {stage === "paySuccess" && <PaySuccess />}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Payment;
