import { useSelector } from "react-redux";
import {
    selectGetPaidOrdersLoading,
    selectPaidOrders,
} from "../../redux/slices/adminPanelSlice";
import OrdersList from "../UI/OrdersList";

function PaidOrdersList() {
    const ordersLoading = useSelector(selectGetPaidOrdersLoading);
    const ordersData = useSelector(selectPaidOrders);
    return <OrdersList listLoading={ordersLoading} data={ordersData} />;
}
export default PaidOrdersList;
