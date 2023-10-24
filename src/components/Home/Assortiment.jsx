import { useState } from "react";
import ProductsList from "../Products/ProductsList";
import BorderedFrame from "../UI/BorderedFrame";
import "./Assortiment.scss";
function Assortiment() {
    const [activeButton, setActiveButton] = useState(0);

    const buttons = [
        { id: 0, label: "Все" },
        { id: 1, label: "Букеты" },
        { id: 2, label: "Домашние цветы" },
        { id: 3, label: "Уличные цветы" },
        { id: 4, label: "Цветы" },
    ];

    const handleButtonClick = (id) => {
        setActiveButton(id);
    };
    return (
        <>
            <div className="wrapper">
                <div className="asrt">
                    <BorderedFrame
                        value="Наш ассортимент"
                        style={{ marginBottom: "50px" }}
                    />
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
                        <ProductsList />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Assortiment;
