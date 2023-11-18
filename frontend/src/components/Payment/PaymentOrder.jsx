import { useDispatch, useSelector } from "react-redux";
import data from "../../data/example";
import { useEffect, useState } from "react";
import {
    getCartData,
    selectCartData,
    selectCartLoading,
    selectCartTotal,
} from "../../redux/slices/cartSlice";
import Loader from "../UI/Loader";

function PaymentOrder({ setNewStage }) {
    const cartData = useSelector(selectCartData);
    const cartTotal = useSelector(selectCartTotal);
    const fetchCartData = useSelector(selectCartLoading);
    const [payMethods, setPayMethods] = useState([
        { id: 0, name: "Карта" },
        { id: 1, name: "СБП" },
    ]);
    const [activeMethod, setActiveMethod] = useState(0);

    const handleMethodClick = (id) => {
        setActiveMethod(id);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartData());
    }, [dispatch]);
    console.log(fetchCartData);
    return (
        <div className="payment__order po">
            <div className="po__wrapper">
                {!fetchCartData ? (
                    <>
                        <div className="po__images">
                            {cartData.map((item) => {
                                return (
                                    <div
                                        className="order__image-container"
                                        key={item.id}
                                    >
                                        <img src={item.img} alt="" />
                                        <p>x{item.count}</p>
                                    </div>
                                );
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
                                            onClick={() =>
                                                handleMethodClick(meth.id)
                                            }
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
                            <span>{cartTotal.sum} Р</span>
                        </div>
                    </>
                ) : (
                    <div className="loader">
                        <Loader />
                    </div>
                )}
            </div>
        </div>
    );
}
export default PaymentOrder;
