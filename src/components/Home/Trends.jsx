import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";
import "./Trends.scss";
import BorderedFrame from "../UI/BorderedFrame";
import TrendItem from "../Products/TrendItem";
import data from "../../data/example";
function Trends() {
    return (
        <>
            <div className="trends">
                <div className="wrapper">
                    <div className="trends__body">
                        <BorderedFrame value="Тренды" />
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
                </div>
            </div>
        </>
    );
}
export default Trends;
