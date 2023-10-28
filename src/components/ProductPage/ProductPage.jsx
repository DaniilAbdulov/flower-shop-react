import "./ProductPage.scss";
import ProductPageItem from "./ProductPageItem";
import { useParams } from "react-router-dom";
import ProductItem from "../Products/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";
import data from "../../data/example";
import Loader from "../UI/Loader";
function ProductPage() {
    const params = useParams();
    const setOneProduct = (data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === params.id) {
                return data[i];
            }
        }
    };
    const product = setOneProduct(data);

    return (
        <div className="fc product-page" style={{ marginBottom: "0px" }}>
            <div className="fc__body ">
                <div className="product-page__wrapper">
                    <div
                        className="product-page__body ppbody"
                        style={{
                            background: product ? "white" : "transparent",
                        }}
                    >
                        {product ? (
                            <>
                                <ProductPageItem product={product} />
                            </>
                        ) : (
                            <div className="ppbody-loading">
                                <div className="loader">
                                    <Loader />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="advice">
                    <div className="advice__title">Советуем к покупке:</div>
                    {data.length > 0 ? (
                        <>
                            <Swiper
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
                                centeredSlides={true}
                                loop={true}
                                autoplay={true}
                                freeMode={true}
                                speed={800}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[FreeMode, Autoplay]}
                                className="mySwiper"
                            >
                                {data.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <ProductItem data={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                    ) : (
                        <>
                            <div className="loader" style={{ width: "100%" }}>
                                <Loader />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
export default ProductPage;
