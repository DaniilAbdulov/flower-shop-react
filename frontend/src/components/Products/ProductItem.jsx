import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./ProductItem.scss";
import Like from "../UI/Like";
import PhotoLoadingHandler from "../UI/PhotoLoadingHandler";

function ProductItem(props) {
    const { id, isfavorite, img, title, price } = props.data;
    return (
        <>
            <div className="product">
                <div className="product__like">
                    <Like like={isfavorite} id={id} />
                </div>
                <div className="product__image">
                    <PhotoLoadingHandler img={img} />
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
