import CartItem from "./CartItem";
import Loader from "../UI/Loader";
import { useSelector } from "react-redux";
import { selectCartData } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

function CartList() {
    const cartData = useSelector(selectCartData);
    return (
        <>
            {cartData.length > 0 ? (
                <>
                    <ul className="cart__list">
                        {cartData.map((item) => {
                            return (
                                <li key={item.id}>
                                    <CartItem item={item} />
                                </li>
                            );
                        })}
                    </ul>
                </>
            ) : cartData.length === 0 ? (
                <>
                    <p>Ваша корзина пуста</p>
                    <Link to="/">Перейти к покупкам</Link>
                </>
            ) : (
                <>
                    <div className="loader">
                        <Loader />
                    </div>
                </>
            )}
        </>
    );
}
export default CartList;
