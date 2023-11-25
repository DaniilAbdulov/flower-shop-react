import { useEffect } from "react";
import "./Statistic.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    getStatic,
    selectGetStaticLoading,
    selectShopStatic,
} from "../../redux/slices/adminPanelSlice";
import Loader from "../UI/Loader";
function Statistic({ visible }) {
    const dispatch = useDispatch();
    const staticLoading = useSelector(selectGetStaticLoading);
    const shopStatic = useSelector(selectShopStatic);
    console.log(staticLoading);
    console.log(shopStatic);
    useEffect(() => {
        if (visible) {
            dispatch(getStatic());
            console.log("Вызов функции");
        } else {
            return;
        }
    }, [dispatch, visible]);
    return (
        <div>
            <div className="statistic">
                {shopStatic && !staticLoading && (
                    <>
                        <ul>
                            <li>Продано на сумму: {shopStatic.total}</li>
                            <li>Количесвто заказов: {shopStatic.count}</li>
                            <li>
                                Количесвто пользоваталей:
                                {shopStatic.users_count}
                            </li>
                        </ul>
                    </>
                )}
                {staticLoading && (
                    <>
                        <Loader />
                    </>
                )}
            </div>
        </div>
    );
}
export default Statistic;
