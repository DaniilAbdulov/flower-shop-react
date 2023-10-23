import { NavLink } from "react-router-dom";
function CartTotal() {
    return (
        <>
            <div className="cart__result cr">
                <div className="cr__title">Ваша корзина</div>
                <div className="cr__items">
                    <div className="cr__item">
                        Итого: <span>2000</span>
                    </div>
                    <div className="cr__item">
                        Товаров (10)<span>2000</span>
                    </div>
                </div>
                <NavLink className="cr__button" to="/payment">
                    Перейти к оформлению
                </NavLink>
            </div>
        </>
    );
}
export default CartTotal;
