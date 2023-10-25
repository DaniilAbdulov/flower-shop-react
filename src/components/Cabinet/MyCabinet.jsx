import { useState } from "react";
import ProductsList from "../Products/ProductsList";
import "../Home/Assortiment.scss";
import "./MyCabinet.scss";
function MyCabinet() {
    const [activeButton, setActiveButton] = useState(0);

    const buttons = [
        { id: 0, label: "Избранное" },
        { id: 1, label: "Покупки" },
    ];
    const handleButtonClick = (id) => {
        setActiveButton(id);
        console.log(buttons[activeButton]);
    };
    return (
        <>
            <div className="cabinet">
                <h2>Личный кабинет</h2>
                <div className="cabinet__user user">
                    <div className="user__info">
                        <div className="user__image">
                            <img
                                src="https://avatars.dzeninfra.ru/get-zen_doc/1592246/pub_5e3c84113a37040237bf3a29_5e3c8f373ca31f61b1afe494/scale_1200"
                                alt="avatar"
                            />
                        </div>
                        <div className="user__name">
                            <p>Daniil Abdulov</p>
                        </div>
                    </div>
                    <div className="user__stats us">
                        <div className="us__item">
                            <p>Сумма покупок</p>
                            <p>1 200 000</p>
                        </div>
                        <div className="us__item">
                            <p>Товаров в избранном</p>
                            <p>12</p>
                        </div>
                        <div className="us__item">
                            <p>Товаров куплено</p>
                            <p>12</p>
                        </div>
                    </div>
                </div>
                <div className="asrt">
                    <div className="asrt__buttons">
                        {buttons.map((button) => (
                            <button
                                key={button.id}
                                className={`asrt__btn ${
                                    activeButton === button.id
                                        ? "asrt__btn-active"
                                        : ""
                                }`}
                                onClick={() => handleButtonClick(button.id)}
                            >
                                {button.label}
                            </button>
                        ))}
                    </div>
                    <div className="asrt__cards">
                        {activeButton === 0 ? (
                            <ProductsList />
                        ) : (
                            <ProductsList />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default MyCabinet;
