import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MyDialog from "../UI/MyDialog";
import UserOrders from "./UserOrders";

function ShowOrders({ showOrders, setShowOrders, getOrders }) {
    return (
        <>
            <div
                className="cabinet__showmeOrders"
                onClick={() => {
                    setShowOrders(true);
                    getOrders();
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
        </>
    );
}
export default ShowOrders;
