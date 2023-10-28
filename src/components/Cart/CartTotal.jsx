import { NavLink } from "react-router-dom";
import data from "../../data/example";
import { useEffect, useState } from "react";
function CartTotal() {
    const totalCount = data.length;
    const [sum, setSum] = useState(0);
    useEffect(() => {
        function totalSum(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i].price;
            }
            setSum(sum);
        }
        totalSum(data);
    }, []);
    return (
        <>
            <div className="cr">
                <div className="cr__items">
                    <div className="cr__item">
                        Итого: <span>{!data ? sum : 0}</span>
                    </div>
                    <div className="cr__item">
                        Товаров ({!data ? totalCount : 0})
                        <span>{!data ? sum : 0}</span>
                    </div>
                </div>
                {!data ? (
                    <>
                        <NavLink className="cr__button" to="/payment">
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
    );
}
export default CartTotal;
