import { NavLink } from "react-router-dom";

import "./Payment.scss";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

function Payment() {
    const [block, setBlock] = useState("initial");
    function changeBlocks() {
        setBlock("payloading");
        setTimeout(() => {
            setBlock("succes");
        }, 5000);
    }
    return (
        <>
            <div className="payment">
                <div className="payment__wrapper">
                    <div
                        className="initial"
                        style={{
                            display: block === "initial" ? "flex" : "none",
                        }}
                    >
                        <div className="initial__info">
                            Сумма покупки: <span>30000</span>
                        </div>
                        <div className="initial__variants payitems">
                            <h2>Выберите способ оплаты</h2>
                            <div className="payitems__box">
                                <div className="payitems__item payitems__item-sber">
                                    SberPay
                                </div>
                                <div className="payitems__item payitems__item-tinkof">
                                    Tinkoff
                                </div>
                                <div className="payitems__item payitems__item-yu">
                                    Ю Money
                                </div>
                                <div className="payitems__item payitems__item-spb">
                                    СПБ
                                </div>
                            </div>
                        </div>
                        <div className="initial__button">
                            <button onClick={changeBlocks}>Оплатить!</button>
                        </div>
                    </div>
                    <div
                        className="payloading"
                        style={{
                            display: block === "payloading" ? "flex" : "none",
                        }}
                    >
                        <div className="payloading__text">
                            <p>Происходит оплата...</p>
                        </div>
                        <div className="payloading__loader">
                            <ClipLoader />
                        </div>
                        <div className="payloading__text">
                            <p>
                                Оплата фиктивна, так как логику по оплате
                                необходимо будет настроить при реальном
                                использовании магазина
                            </p>
                        </div>
                    </div>
                    <div
                        className="succes"
                        style={{
                            display: block === "succes" ? "block" : "none",
                        }}
                    >
                        <div className="succes__text">
                            <h2>Поздравляю !</h2>
                            <p>Оплата прошла успешно</p>
                            <NavLink to="/"> Снова к покупкам </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Payment;
