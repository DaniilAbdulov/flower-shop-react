import "./Cart.scss";
import CartList from "../components/Cart/CartList";
import CartTotal from "../components/Cart/CartTotal";
function Cart() {
    return (
        <div className="wrapper">
            <div className="cart">
                <div className="cart__row">
                    <div className="cart__column">
                        <CartList />
                    </div>
                    <div className="cart__column">
                        <CartTotal />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;
