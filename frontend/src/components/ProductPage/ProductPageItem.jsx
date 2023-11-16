import { useDispatch, useSelector } from "react-redux";
import Like from "../UI/Like";
import { selectIsAuth } from "../../redux/slices/userSlice";
import { addProductToCart } from "../../redux/slices/cartSlice";

function ProductPageItem({ product }) {
    const { id, img, title, description, sold, price, available, isfavorite } =
        product;
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    function addProductToCard() {
        const idOfProduct = id;
        // alert(`Продукт с id ${idOfProduct} улетел в корзину`);
        dispatch(addProductToCart(idOfProduct));
    }
    return (
        <>
            <div className="ppbody__like">
                <Like like={isfavorite} id={id} />
            </div>
            <div className="ppbody__image">
                <img src={img} alt="Flower" />
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
                    <button onClick={addProductToCard} disabled={!isAuth}>
                        В корзину
                    </button>
                </div>
            </div>
        </>
    );
}
export default ProductPageItem;
