import ProductItem from "../Products/ProductItem";
import "./ProductPage.scss";
import MySwiper from "../UI/MySwiper";
import ProductPageItem from "./ProductPageItem";
function ProductPage() {
    return (
        <div className="fc product-page" style={{ marginBottom: "0px" }}>
            <div className="fc__body ">
                <div className="product-page__wrapper">
                    <div className="product-page__body ppbody">
                        <ProductPageItem />
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
