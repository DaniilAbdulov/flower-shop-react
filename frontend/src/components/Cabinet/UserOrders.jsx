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
    console.log(ordersData);
    return (
        <div>
            <h2>Заказы</h2>
            {!ordersLoading ? (
                <div className="user-orders">
                    {ordersData.map((item) => (
                        <OrderItem order={item} key={item.order_id} />
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}
export default UserOrders;
