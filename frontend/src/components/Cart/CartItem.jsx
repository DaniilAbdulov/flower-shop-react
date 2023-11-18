import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { deleteCartItem, setCountOfItem } from "../../redux/slices/cartSlice";
function CartItem({ item }) {
    const { id, price, title, available, count, description, img } = item;

    const dispatch = useDispatch();

    function increment() {
        if (available > count) {
            const newCount = count + 1;
            dispatch(setCountOfItem({ id, newCount }));
        }
    }
    function decrement() {
        if (count > 1) {
            const newCount = count - 1;
            dispatch(setCountOfItem({ id, newCount }));
        }
    }
    function deleteProductFromCart(productId) {
        dispatch(deleteCartItem(productId));
    }

    return (
        <>
            <div className="ci">
                <div className="ci__wrapper">
                    <div className="ci__content">
                        <div className="ci__image">
                            <img src={img} alt="flower" />
                        </div>
                        <div className="ci__body">
                            <h3>{price}</h3>
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
