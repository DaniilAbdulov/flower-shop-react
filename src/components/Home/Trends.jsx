import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";
import "./Trends.scss";
import BorderedFrame from "../UI/BorderedFrame";
import TrendItem from "../Products/TrendItem";
import data from "../../data/example";
import Loader from "../UI/Loader";
function Trends() {
    return (
        <>
            <div className="wrapper">
                <div
                    className="trends"
                    style={{
                        alignItems: !data.length > 0 ? "" : "center",
                    }}
                >
                    <div className="trends__label">
                        <BorderedFrame value="Тренды" />
                    </div>
                    {!data.length > 0 ? (
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
                                {data.map((item) => {
                                    return (
                                        <SwiperSlide key={item.id}>
                                            <TrendItem value={item} />
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
