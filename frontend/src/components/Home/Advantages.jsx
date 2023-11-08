import "./Advantages.scss";
import roses from "../../asserts/roses.png";
import { PiFlowerLotusThin } from "react-icons/pi";
import { GiFlowers } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";

function Advantages() {
    const cards = [
        [<PiFlowerLotusThin />, "Красивые композиции"],
        [<GiFlowers />, "Ширкоий ассортимент"],
        [<IoCarSportOutline />, "Быстрая доставка"],
        [<AiOutlineDollarCircle />, "Доступные цены"],
    ];

    return (
        <div className="">
            <div className=" advantages">
                <div className="advantages__wrapper">
                    <div className="advantages__image">
                        <img src={roses} alt="roses" />
                    </div>
                    <div className="advantages__cards">
                        {cards.map((card, index) => (
                            <div
                                className="advantages__card c-card"
                                key={index}
                            >
                                <div className="c-card__icon">{card[0]}</div>
                                <div className="c-card__title">{card[1]}</div>
                            </div>
                        ))}
                    </div>

                    <div className="advantages__image-reverse">
                        <img src={roses} alt="roses" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Advantages;
