import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/userSlice";
import { NavLink } from "react-router-dom";
import { selectCartTotal } from "../../redux/slices/cartSlice";
import { clearOrderCreated } from "../../redux/slices/ordersSlice";
function CartTotal() {
    const isAuth = useSelector(selectIsAuth);
    const cartTotal = useSelector(selectCartTotal);
    const dispatch = useDispatch();
    function clearOrderCreatedHandler() {
        dispatch(clearOrderCreated());
    }
    return (
        <>
            {isAuth && (
                <>
                    <div className="cr">
                        <div className="cr__items">
                            <div className="cr__item">
                                Итого:{" "}
                                <span>
                                    {cartTotal.sum !== null ? cartTotal.sum : 0}
                                </span>
                            </div>
                            <div className="cr__item">
                                Товаров (
                                {cartTotal.count !== null ? cartTotal.count : 0}
                                )
                                <span>
                                    {cartTotal.sum !== null ? cartTotal.sum : 0}
                                </span>
                            </div>
                        </div>
                        {cartTotal.count !== null ? (
                            <>
                                <NavLink
                                    className="cr__button"
                                    to="/payment"
                                    onClick={clearOrderCreatedHandler()}
                                >
                                    Перейти к оформлению
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink className="cr__button" to="/" disabled>
                                    Перейти к покупкам
                                </NavLink>
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
export default CartTotal;
