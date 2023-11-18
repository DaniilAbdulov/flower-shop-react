import "../Home/Assortiment.scss";
import "./MyCabinet.scss";

import UserInfo from "./UserInfo";
import UserFavoritesAndAdviced from "./UserFavoritesAndAdviced";
import UserOrders from "./UserOrders";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import MyDialog from "../UI/MyDialog";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, selectOrdersData } from "../../redux/slices/ordersSlice";
function MyCabinet() {
    const [showOrders, setShowOrders] = useState(false);
    const ordersData = useSelector(selectOrdersData);
    const dispatch = useDispatch();
    function fetchOrdersHandler() {
        dispatch(getOrders());
    }
    console.log(ordersData);
    return (
        <>
            <div className="cabinet">
                <h2>Личный кабинет</h2>

                <UserInfo />
                <div
                    className="cabinet__showmeOrders"
                    onClick={() => {
                        setShowOrders(true);
                        fetchOrdersHandler();
                    }}
                >
                    <button>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </button>
                    <h2>Показать мои заказы</h2>
                </div>
                <MyDialog visible={showOrders} setVisible={setShowOrders}>
                    <UserOrders />
                </MyDialog>
                <UserFavoritesAndAdviced visible={showOrders} />
            </div>
        </>
    );
}
export default MyCabinet;
