import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/userSlice";
import { addProductToCart } from "../../redux/slices/cartSlice";
import Like from "../UI/Like";
import PhotoLoadingHandler from "../UI/PhotoLoadingHandler";

function ProductPageItem({ product }) {
    const { id, img, title, description, price, available, isfavorite } =
        product;
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    function addProductToCard() {
        const idOfProduct = id;
        dispatch(addProductToCart(idOfProduct));
    }
    return (
        <>
            <div className="ppbody__like">
                <Like like={isfavorite} id={id} />
            </div>
            <div className="ppbody__image">
                <PhotoLoadingHandler img={img} />
            </div>
            <div className="ppbody__data">
                <h2>{title}</h2>
                <h3>{description}</h3>
                <div className="ppbody__info">
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
