import PhotoLoadingHandler from "../UI/PhotoLoadingHandler";

function PaymentOrderItem({ item }) {
    const { id, img, count } = item;

    return (
        <div className="order__image-container" key={id}>
            <PhotoLoadingHandler img={img} />
            <p>x{count}</p>
        </div>
    );
}
export default PaymentOrderItem;
