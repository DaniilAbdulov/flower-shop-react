import CartItem from "./CartItem";
import data from "../../data/example";
function CartList() {
    return (
        <>
            <ul className="cart__list">
                {data.map((item) => (
                    <li>
                        <CartItem item={item} key={item.id} />
                    </li>
                ))}
            </ul>
        </>
    );
}
export default CartList;
