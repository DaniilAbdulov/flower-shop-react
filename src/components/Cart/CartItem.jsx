import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CartItem.scss";
import { useState } from "react";
function CartItem({ item }) {
    const { id, price, title, description, img } = item;
    console.log(item);
    const [count, setCount] = useState(1);
    const [available, setAvailable] = useState(item.available);
    function increment() {
        if (available > count) {
            setCount(count + 1);
        }
    }
    function decrement() {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    function deleteProductFromCart(productid) {
        alert(`product width id ${productid} deleted from cart`);
    }
    return (
        <>
            <div className="cart-item">
                <div className="cart-item__wrapper">
                    <div className="cart-item__row">
                        <div className="cart-item__image">
                            <img src={img} alt="flower" />
                        </div>
                        <div className="cart-item__body">
                            <div className="cart-item__price">{price} ₽</div>
                            <div className="cart-item__title">
                                <h2>{title}</h2>
                            </div>
                            <div className="cart-item__description">
                                <h3>{description}</h3>
                            </div>
                            <div className="cart-item__available">
                                В наличии: <span>{available}</span>
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
                        <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => deleteProductFromCart(id)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
export default CartItem;
