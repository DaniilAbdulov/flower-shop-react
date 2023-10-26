import CartItem from "./CartItem";
import data from "../../data/example";
function CartList() {
    return (
        <>
            <ul className="cart__list">
                {data.map((item) => (
                    <li key={item.id}>
                        <CartItem item={item} />
                    </li>
                ))}
            </ul>
        </>
    );
}
export default CartList;
