import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCreateOrderLoading,
    selectOrderCreated,
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
    const orderCreated = useSelector(selectOrderCreated);
    const dispatch = useDispatch();
    function changeStage(value) {
        setStage(value);
    }
    useEffect(() => {
        if (orderCreated) {
            dispatch(clearCart());
            dispatch(clearCartTotal());
        }
    }, [dispatch, orderCreated]);
    return (
        <div>
            <div className="wrapper">
                <div className="payment">
                    <div
                        className={`payment__wrapper ${
                            createOrderLoading ? "payment__wrapper-pending" : ""
                        } `}
                    >
                        {!createOrderLoading && !orderCreated && (
                            <PaymentOrder setNewStage={changeStage} />
                        )}

                        {createOrderLoading && (
                            <>
                                <h2>Создаем заказ</h2>
                                <Loader />
                            </>
                        )}
                        {!createOrderLoading &&
                            orderCreated &&
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
