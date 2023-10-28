import { useState } from "react";
import ProductsList from "../Products/ProductsList";
import "../Home/Assortiment.scss";
import "./MyCabinet.scss";
import data from "../../data/example";
import Loader from "../UI/Loader";
function MyCabinet() {
    const [activeButton, setActiveButton] = useState(0);

    const buttons = [
        { id: 0, label: "Избранное" },
        { id: 1, label: "Покупки" },
    ];
    const handleButtonClick = (id) => {
        setActiveButton(id);
    };

    function filteredArray(data) {
        return data.filter((item) => {
            return item.isFavorite;
        });
    }
    let newArr = activeButton === 0 ? filteredArray(data) : data;
    return (
        <>
            <div className="cabinet">
                <h2>Личный кабинет</h2>
                {!data.length > 0 ? (
                    <>
                        <div className="cabinet__user user">
                            <div className="user__info">
                                <div className="user__image">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/118374108?v=4"
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
                    </>
                ) : (
                    <>
                        <div
                            className="loader"
                            style={{
                                width: "100%",
                                minHeight: "270px",
                                marginBottom: "20px",
                            }}
                        >
                            <Loader />
                        </div>
                    </>
                )}
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
                    {!data.length > 0 ? (
                        <>
                            <div className="asrt__cards">
                                <ProductsList items={newArr} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="loader" style={{ width: "100%" }}>
                                <Loader />
                            </div>
                            {/* if isLoading true, but data is empty,then 
                            <div className="nodata">
                                <p>Ваш список пуст</p>
                            </div> */}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
export default MyCabinet;
