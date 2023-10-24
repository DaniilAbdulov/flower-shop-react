import { NavLink } from "react-router-dom";
function ProductPageItem() {
    return (
        <>
            <div className="ppbody__image">
                <img
                    src="https://thypix.com/wp-content/uploads/beautiful-flower-bouquets-25.jpg"
                    alt="Flower"
                />
            </div>
            <div className="ppbody__data">
                <h2>Lorem ipsum lorem</h2>
                <h3>
                    babel-preset-react-app is part of the create-react-app
                    project, which is not maintianed anymore. It is thus
                    unlikely that this bug will ever be fixed.
                </h3>
                <div className="ppbody__info">
                    <p>
                        Продано: <span>140</span>
                    </p>
                    <p>
                        Осталось в наличи: <span>20</span>
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
