import { useSelector } from "react-redux";
import {
    selectOrdersData,
    selectOrdersLoading,
} from "../../redux/slices/ordersSlice";
import OrderItem from "./OrderItem";
import Loader from "../UI/Loader";
function UserOrders() {
    const ordersLoading = useSelector(selectOrdersLoading);
    const ordersData = useSelector(selectOrdersData);
    return (
        <div>
            <h2>Заказы</h2>
            {ordersLoading ? (
                <Loader />
            ) : ordersData.length === 0 ? (
                <p>List is empty</p>
            ) : (
                <div className="user-orders">
                    {ordersData.map((item) => (
                        <OrderItem order={item} key={item.order_id} />
                    ))}
                </div>
            )}
            {/* {ordersLoading && (
                <>
                    <Loader />
                </>
            )}
            {ordersData.length === 0 && !ordersLoading ? (
                <p>List is empty</p>
            ) : (
                <div className="user-orders">
                    {ordersData.map((item) => (
                        <OrderItem order={item} key={item.order_id} />
                    ))}
                </div>
            )} */}
        </div>
    );
}
export default UserOrders;
