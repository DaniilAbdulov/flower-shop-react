import "./Cart.scss";
import CartList from "../components/Cart/CartList";
import CartTotal from "../components/Cart/CartTotal";
function Cart() {
    return (
        <div className="wrapper">
            <div className="cart">
                <div className="cart__body">
                    <CartList />
                </div>
                <CartTotal />
            </div>
        </div>
    );
}
export default Cart;
