import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./ProductItem.scss";
import Like from "../UI/Like";

function ProductItem(props) {
    console.log(props.value);
    return (
        <>
            <div className="product">
                <div className="product__like">
                    <Like />
                </div>
                <div className="product__image">
                    <img
                        src="https://thypix.com/wp-content/uploads/beautiful-flower-bouquets-25.jpg"
                        alt="Flower"
                    />
                </div>
                <div className="product__title">
                    {props.value ? `${props.value} букет №1` : "Букет номер 1"}
                </div>

                <div className="product__values">
                    <div className="product__price">1000 ₽</div>
                    <NavLink to="/product/id">
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
