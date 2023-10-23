import "./Trends.scss";
import BorderedFrame from "../UI/BorderedFrame";
import TrendItem from "../Products/TrendItem";
import MySwiper from "../UI/MySwiper";
function Trends() {
    return (
        <>
            <div className="trends">
                <div className="wrapper">
                    <div className="trends__body">
                        <BorderedFrame value="Тренды" />
                        <MySwiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                502: {
                                    slidesPerView: 3,
                                },
                            }}
                            spaceBetween={20}
                            value={<TrendItem />}
                        ></MySwiper>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Trends;
