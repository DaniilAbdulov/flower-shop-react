import OrderItem from "../Cabinet/OrderItem";
import Loader from "./Loader";

function OrdersList({ listLoading, data }) {
    return (
        <>
            <div>
                <h2>Заказы</h2>
                {listLoading ? (
                    <Loader />
                ) : data.length === 0 ? (
                    <p>List is empty</p>
                ) : (
                    <div className="user-orders">
                        {data.map((item) => (
                            <OrderItem order={item} key={item.order_id} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
export default OrdersList;
