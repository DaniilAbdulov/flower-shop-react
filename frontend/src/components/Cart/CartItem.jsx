import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CartItem.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteCartItem,
    getCartData,
    selectDeleteLoading,
} from "../../redux/slices/cartSlice";
function CartItem({ item }) {
    const { id, price, title, available, description, img } = item;
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const deleteLoading = useSelector(selectDeleteLoading);
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
    function deleteProductFromCart(productId) {
        dispatch(deleteCartItem(productId));
    }
    // useEffect(() => {
    //     dispatch(getCartData());
    // }, [dispatch, deleteLoading]);
    return (
        <>
            <div className="ci">
                <div className="ci__wrapper">
                    <div className="ci__content">
                        <div className="ci__image">
                            <img src={img} alt="flower" />
                        </div>
                        <div className="ci__body">
                            <h3>{price} ₽</h3>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <p>
                                В наличии: <span>{available}</span>
                            </p>
                            <div className="ci__buttons">
                                <div className="ci__delete">
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        onClick={() =>
                                            deleteProductFromCart(id)
                                        }
                                    />
                                </div>
                                <div className="ci__counter">
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
                    </div>
                </div>
            </div>
        </>
    );
}
export default CartItem;
