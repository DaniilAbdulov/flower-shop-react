import { selectIsTrends } from "../../redux/slices/productsSlice";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";
import "./Trends.scss";
import BorderedFrame from "../UI/BorderedFrame";
import TrendItem from "../Products/TrendItem";

import Loader from "../UI/Loader";
import { useMemo } from "react";
function Trends() {
    const trends = useSelector(selectIsTrends);
    const trendItems = useMemo(() => {
        return trends.map((item) => item);
    }, [trends]);
    return (
        <>
            <div className="wrapper">
                <div
                    className="trends"
                    style={{
                        alignItems: trendItems.length > 0 ? "" : "center",
                    }}
                >
                    <div className="trends__label">
                        <BorderedFrame value="Тренды" />
                    </div>
                    {trendItems.length > 0 ? (
                        <div className="trends__swiper">
                            <Swiper
                                breakpoints={{
                                    320: {
                                        slidesPerView: 2,
                                    },
                                    502: {
                                        slidesPerView: 3,
                                    },
                                }}
                                spaceBetween={20}
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
                                {trendItems.map((item) => {
                                    return (
                                        <SwiperSlide key={item.id}>
                                            <TrendItem
                                                id={item.id}
                                                img={item.img}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    ) : (
                        <div className="loader">
                            <Loader />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Trends;
