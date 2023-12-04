import { useSelector } from "react-redux";
import {
    selectOrdersData,
    selectOrdersLoading,
} from "../../redux/slices/ordersSlice";
import OrdersList from "../UI/OrdersList";
function UserOrders() {
    const ordersLoading = useSelector(selectOrdersLoading);
    const ordersData = useSelector(selectOrdersData);

    return <OrdersList listLoading={ordersLoading} data={ordersData} />;
}
export default UserOrders;
