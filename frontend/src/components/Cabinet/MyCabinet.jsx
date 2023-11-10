import "../Home/Assortiment.scss";
import "./MyCabinet.scss";

import UserInfo from "./UserInfo";
import UserFavoritesAndBought from "./UserFavoritesAndBought";
import UserOrders from "./UserOrders";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import MyDialog from "../UI/MyDialog";
import { useState } from "react";
function MyCabinet() {
    const [showOrders, setShowOrders] = useState(false);
    return (
        <>
            <div className="cabinet">
                <h2>Личный кабинет</h2>

                <UserInfo />
                <div
                    className="cabinet__showmeOrders"
                    onClick={() => setShowOrders(true)}
                >
                    <button>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </button>
                    <h2>Показать мои заказы</h2>
                </div>
                <MyDialog visible={showOrders} setVisible={setShowOrders}>
                    <UserOrders />
                </MyDialog>
                <UserFavoritesAndBought visible={showOrders} />
            </div>
        </>
    );
}
export default MyCabinet;
