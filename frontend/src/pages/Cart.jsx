import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectUserId } from "../redux/slices/userSlice";
import "./Cart.scss";
import CartList from "../components/Cart/CartList";
import CartTotal from "../components/Cart/CartTotal";
import ProductsList from "../components/Products/ProductsList";
import Loader from "../components/UI/Loader";
import UnAuth from "../components/UI/UnAuth";
import {
    fetchAdvicedProducts,
    selectFetchFromThisId,
    selectIsAdvice,
} from "../redux/slices/productsSlice";
import { useEffect } from "react";
import { getCartData } from "../redux/slices/cartSlice";
function Cart() {
    const isAuth = useSelector(selectIsAuth);
    const advicedProducts = useSelector(selectIsAdvice);
    const fethingId = useSelector(selectFetchFromThisId);
    const userId = useSelector(selectUserId);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartData());

        dispatch(fetchAdvicedProducts(userId));
    }, [dispatch, isAuth, userId, advicedProducts.length]);

    return (
        <div className="wrapper">
            <div className="cart">
                {isAuth ? (
                    <div className="cart__row">
                        <div className="cart__column">
                            <h2>Ваша корзина</h2>
                            <div className="cart__column-list">
                                <CartList />
                            </div>
                        </div>
                        <div className="cart__column">
                            <div className="cart__result cart__result-desktop">
                                <CartTotal />
                            </div>
                        </div>
                    </div>
                ) : (
                    <UnAuth location="Раздел с корзиной покупок" />
                )}

                <h2>Советуем к покупке</h2>
                <div className="cart__column-advice">
                    {advicedProducts.length > 0 ? (
                        <>
                            <ProductsList items={advicedProducts} />
                        </>
                    ) : (
                        <>
                            <div className="loader">
                                <Loader />
                            </div>
                        </>
                    )}
                </div>
                <div className="cart__result cart__result-mobile">
                    <CartTotal />
                </div>
            </div>
        </div>
    );
}
export default Cart;
