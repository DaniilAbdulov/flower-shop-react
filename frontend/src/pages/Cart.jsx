import "./Cart.scss";
import CartList from "../components/Cart/CartList";
import CartTotal from "../components/Cart/CartTotal";
import data from "../data/example";
import ProductsList from "../components/Products/ProductsList";
import Loader from "../components/UI/Loader";
function Cart() {
    return (
        <div className="wrapper">
            <div className="cart">
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
                <h2>Советуем к покупке</h2>
                <div className="cart__column-advice">
                    {data.length > 0 ? (
                        <>
                            <ProductsList items={data} />
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
