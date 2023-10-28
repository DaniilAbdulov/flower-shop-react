import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";
function MySwiper(props) {
    return (
        <>
            <Swiper
                breakpoints={props.breakpoints}
                spaceBetween={props.spaceBetween}
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
            ></Swiper>
        </>
    );
}
export default MySwiper;
