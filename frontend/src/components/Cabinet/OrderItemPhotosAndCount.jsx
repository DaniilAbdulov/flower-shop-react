import { useEffect, useState } from "react";
import PhotoLoadingHandler from "../UI/PhotoLoadingHandler";

function OrderItemPhotosAndCount({ product }) {
    const { id, img, count } = product;
    const [imgIsLoading, setImgIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        const image = new Image();

        image.onload = () => {
            setImgIsLoading(true);
        };

        image.onerror = () => {
            setHasError(true);
            console.log("Произошла ошибка при загрузке изображения.");
        };

        image.src = img;

        return () => {
            image.onload = null;
            image.onerror = null;
        };
    }, [img]);
    return (
        <div className="order__image-container" key={id}>
            <PhotoLoadingHandler
                img={img}
                imgIsLoading={imgIsLoading}
                hasError={hasError}
            />
            <p>x{count}</p>
        </div>
    );
}
export default OrderItemPhotosAndCount;
