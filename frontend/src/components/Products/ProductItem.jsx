import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./ProductItem.scss";
import Like from "../UI/Like";
import { useEffect, useState } from "react";
import PhotoLoadingHandler from "../UI/PhotoLoadingHandler";

function ProductItem(props) {
    const { id, isfavorite, img, title, price } = props.data;
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
        <>
            <div className="product">
                <div className="product__like">
                    <Like like={isfavorite} id={id} />
                </div>
                <div className="product__image">
                    <PhotoLoadingHandler
                        img={img}
                        imgIsLoading={imgIsLoading}
                        hasError={hasError}
                    />
                </div>
                <div className="product__title">{title}</div>

                <div className="product__values">
                    <div className="product__price">{price}</div>
                    <NavLink to={`/product/${id}`}>
                        <button className="product__button">
                            <AiOutlineShoppingCart />
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default ProductItem;
