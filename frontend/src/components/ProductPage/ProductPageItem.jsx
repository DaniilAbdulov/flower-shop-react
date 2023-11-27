import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/userSlice";
import { addProductToCart } from "../../redux/slices/cartSlice";
import Like from "../UI/Like";
import { useEffect, useState } from "react";
import PhotoLoadingHandler from "../UI/PhotoLoadingHandler";

function ProductPageItem({ product }) {
    const [imgIsLoading, setImgIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const { id, img, title, description, sold, price, available, isfavorite } =
        product;
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    function addProductToCard() {
        const idOfProduct = id;
        dispatch(addProductToCart(idOfProduct));
    }
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
            <div className="ppbody__like">
                <Like like={isfavorite} id={id} />
            </div>
            <div className="ppbody__image">
                <PhotoLoadingHandler
                    img={img}
                    imgIsLoading={imgIsLoading}
                    hasError={hasError}
                />
            </div>
            <div className="ppbody__data">
                <h2>{title}</h2>
                <h3>{description}</h3>
                <div className="ppbody__info">
                    <p>
                        Продано: <span>{sold}</span>
                    </p>
                    <p>
                        Осталось в наличи: <span>{available}</span>
                    </p>
                    <p>
                        Цена: <span>{price}</span>
                    </p>
                </div>
                <div className="ppbody__button">
                    <button
                        onClick={addProductToCard}
                        disabled={!isAuth || available === 0}
                    >
                        {available ? "В корзину" : "Нет в наличии"}
                    </button>
                </div>
            </div>
        </>
    );
}
export default ProductPageItem;
