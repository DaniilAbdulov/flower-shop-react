import CartItem from "./CartItem";
function CartList() {
    return (
        <>
            <ul className="cart__list">
                <li>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </li>
            </ul>
        </>
    );
}
export default CartList;
