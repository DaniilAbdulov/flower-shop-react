import data from "../../data/example";
import { useEffect, useState } from "react";

function PaymentOrder({ setNewStage }) {
    const [payMethods, setPayMethods] = useState([
        { id: 0, name: "Карта" },
        { id: 1, name: "СБП" },
    ]);
    const [activeMethod, setActiveMethod] = useState(0);

    const handleMethodClick = (id) => {
        setActiveMethod(id);
    };
    return (
        <div className="payment__order po">
            <div className="po__wrapper">
                <div className="po__images">
                    {data.map((item, index) => {
                        if (index < 1) {
                            return (
                                <div className="po__image" key={item.img}>
                                    <img src={item.img} alt="" />
                                </div>
                            );
                        }
                    })}
                </div>
                <div className="po__methods">
                    <h3>Способ оплаты</h3>
                    <ul>
                        {payMethods.map((meth) => {
                            return (
                                <li
                                    key={meth.id}
                                    className={`po__method ${
                                        activeMethod === meth.id
                                            ? "po__method-active"
                                            : ""
                                    }`}
                                    onClick={() => handleMethodClick(meth.id)}
                                >
                                    {meth.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div
                    className="po__button"
                    onClick={() => setNewStage("createOrder")}
                >
                    <span>Оплатить</span>
                    <span>1200 Р</span>
                </div>
            </div>
        </div>
    );
}
export default PaymentOrder;
