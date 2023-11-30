import PhotoLoadingHandler from "../UI/PhotoLoadingHandler";

function OrderItemPhotosAndCount({ product }) {
    const { id, img, count } = product;

    return (
        <div className="order__image-container" key={id}>
            <PhotoLoadingHandler img={img} />
            <p>x{count}</p>
        </div>
    );
}
export default OrderItemPhotosAndCount;
