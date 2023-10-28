import "./ProductPage.scss";
import axios from "axios";
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
import { useEffect, useState } from "react";
function ProductPage() {
    const [product, setProduct] = useState(null);
    const params = useParams();
    const productId = params.id;
    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await axios.get(
                    `http://localhost:4000/api/product/${productId}`
                );
                console.log(response.data);
                setProduct(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchProduct();
    }, [productId]);
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
