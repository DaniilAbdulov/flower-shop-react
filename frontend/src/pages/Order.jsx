import { useParams } from "react-router-dom";
import OrderItem from "../components/Cabinet/OrderItem";
import orders from "../data/orders";
function Order() {
    const params = useParams();
    const orderId = params.id;
    const order = orders.filter((item) => item.id == orderId)[0];
    console.log(order);
    return (
        <div className="payment">
            <div className="order"></div>
        </div>
    );
}
export default Order;
