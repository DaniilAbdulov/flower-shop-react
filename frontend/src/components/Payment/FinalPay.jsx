import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { payOrder, selectNewOrderId } from "../../redux/slices/ordersSlice";
function FinalPay() {
    const newOrderId = useSelector(selectNewOrderId);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="final-pay">
                <div className="final-pay__close">
                    <NavLink to="/cabinet">
                        <FontAwesomeIcon
                            icon={faXmark}
                            style={{ color: "#050101", fontSize: "20px" }}
                        />
                    </NavLink>
                </div>
                <div
                    className="final-pay__text"
                    style={{ marginBottom: "15px", textAlign: "center" }}
                >
                    Здесь происходит введение платежной информации. Запрос на
                    оплату в банк и т.д. Данная логика будет настроена при
                    реальном использовани магазина. Далее вы либо окончательтно
                    подтверждаете оплату, либо нажимаете крестик и заказ
                    приобретает статус "не оплачено"
                </div>
                <div
                    className="final-pay__button po__button"
                    onClick={() => {
                        dispatch(payOrder(newOrderId));
                    }}
                >
                    Оплатить
                </div>
            </div>
        </div>
    );
}
export default FinalPay;
