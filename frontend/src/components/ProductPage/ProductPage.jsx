import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectUserId } from "../../redux/slices/userSlice";
import {
    fetchAdvicedProducts,
    fetchSingleProduct,
    selectIsAdvice,
    selectSingleProduct,
} from "../../redux/slices/productsSlice";
import "./ProductPage.scss";
import ProductPageItem from "./ProductPageItem";
import { useParams } from "react-router-dom";
import ProductItem from "../Products/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";
import Loader from "../UI/Loader";
function ProductPage() {
    const params = useParams();
    const productId = params.id;
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    const advicedProducts = useSelector(selectIsAdvice);
    const product = useSelector(selectSingleProduct);
    useEffect(() => {
        dispatch(fetchSingleProduct({ productId, userId }));
    }, [dispatch, userId, productId]);
    // useEffect(() => {
    //     if (advicedProducts.length === 0) {
    //         dispatch(fetchAdvicedProducts(user));
    //     }
    // }, [dispatch, advicedProducts, user]);
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
                        {product.img ? (
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
                    {advicedProducts.length > 0 ? (
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
                                {advicedProducts.map((item) => (
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
