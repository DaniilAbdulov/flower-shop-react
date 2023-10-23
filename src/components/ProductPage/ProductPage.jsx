import ProductItem from "../Products/ProductItem";
import "./ProductPage.scss";
import { NavLink } from "react-router-dom";
import MySwiper from "../UI/MySwiper";
function ProductPage() {
    return (
        <div className="fc product-page" style={{ marginBottom: "0px" }}>
            <div className="fc__body ">
                <div className="product-page__wrapper">
                    <div className="product-page__body ppbody">
                        <div className="ppbody__image">
                            <img
                                src="https://thypix.com/wp-content/uploads/beautiful-flower-bouquets-25.jpg"
                                alt="Flower"
                            />
                        </div>
                        <div className="ppbody__data">
                            <h2>Lorem ipsum lorem</h2>
                            <h3>
                                babel-preset-react-app is part of the
                                create-react-app project, which is not
                                maintianed anymore. It is thus unlikely that
                                this bug will ever be fixed.
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
                    </div>
                </div>

                <div className="advice">
                    <div className="advice__title">Советуем к покупке:</div>
                    <MySwiper
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                            },
                            502: {
                                slidesPerView: 3,
                            },
                            769: {
                                slidesPerView: 4,
                            },
                        }}
                        spaceBetween={10}
                        value={<ProductItem />}
                    ></MySwiper>
                </div>
            </div>
        </div>
    );
}
export default ProductPage;
