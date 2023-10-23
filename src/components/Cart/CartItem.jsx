import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CartItem.scss";
import { useState } from "react";
function CartItem() {
    const [count, setCount] = useState(1);
    const [avaibale, setAvaibale] = useState(10);
    function increment() {
        if (avaibale > count) {
            setCount(count + 1);
        }
    }
    function decrement() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className="cart-item">
                <div className="cart-item__wrapper">
                    <div className="cart-item__row">
                        <div className="cart-item__image">
                            <img
                                src="https://thypix.com/wp-content/uploads/beautiful-flower-bouquets-25.jpg"
                                alt="flower"
                            />
                        </div>
                        <div className="cart-item__body">
                            <div className="cart-item__price">1000</div>
                            <div className="cart-item__title">
                                Lorem ipsum solid sdfsdf sdfsdfsd sdfsdfd
                            </div>
                            <div className="cart-item__avaibale">
                                В наличии: {avaibale}
                            </div>
                            <div className="cart-item__counter">
                                <FontAwesomeIcon
                                    icon={faMinus}
                                    onClick={decrement}
                                />
                                <span> {count} </span>
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    onClick={increment}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="cart-item__icon">
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default CartItem;
