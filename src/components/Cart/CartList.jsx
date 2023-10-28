import CartItem from "./CartItem";
import data from "../../data/example";
import Loader from "../UI/Loader";
function CartList() {
    return (
        <>
            {!data.length > 0 ? (
                <>
                    <ul className="cart__list">
                        {data.map((item) => (
                            <li key={item.id}>
                                <CartItem item={item} />
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    <div className="loader">
                        <Loader />
                    </div>
                    {/* if isLoading true, but data is empty,then 
                            <div className="nodata">
                                <p>Ваша корзина пуста</p>
                            </div> */}
                </>
            )}
        </>
    );
}
export default CartList;
