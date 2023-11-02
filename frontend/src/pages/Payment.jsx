import { useState } from "react";
import PaymentOrder from "../components/Payment/PaymentOrder";
import "./Payment.scss";
import FinalPay from "../components/Payment/FinalPay";
import PaySuccess from "../components/Payment/PaySuccess";
import Loader from "../components/UI/Loader";
function Payment() {
    const [stage, setStage] = useState("review");
    function changeStage(value) {
        setStage(value);
    }
    return (
        <div>
            <div className="wrapper">
                <div className="payment">
                    <div
                        className={`payment__wrapper ${
                            stage === "createOrder"
                                ? "payment__wrapper-pending"
                                : ""
                        } `}
                    >
                        {stage === "review" && (
                            <PaymentOrder setNewStage={changeStage} />
                        )}
                        {stage === "createOrder" && (
                            <>
                                <h2>Создаем заказ</h2>
                                <Loader
                                    setNewStage={changeStage}
                                    stageNow="createOrder"
                                />
                            </>
                        )}
                        {stage === "payClicked" && (
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
