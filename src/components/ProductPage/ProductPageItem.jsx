import { NavLink } from "react-router-dom";
function ProductPageItem({ product }) {
    const { img, title, description, sold, price, available } = product;
    return (
        <>
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
                    <button>
                        <NavLink to="/cart">В корзину</NavLink>
                    </button>
                </div>
            </div>
        </>
    );
}
export default ProductPageItem;
