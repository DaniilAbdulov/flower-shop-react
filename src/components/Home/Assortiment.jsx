import { useState } from "react";
import ProductsList from "../Products/ProductsList";
import BorderedFrame from "../UI/BorderedFrame";
import "./Assortiment.scss";
import data from "../../data/example";
function Assortiment() {
    const [activeButton, setActiveButton] = useState(0);
    const buttons = [{ id: 0, label: "Все" }];
    function setNamesOfButtons(d) {
        const set = new Set();
        for (let i = 0; i < d.length; i++) {
            set.add(data[i].category);
        }
        const categories = Array.from(set);
        for (let i = 0; i < categories.length; i++) {
            const newButton = {
                id: i + 1,
                label: `${categories[i]}`,
            };
            buttons.push(newButton);
        }
    }
    //Нужно получить с сервера только названия категорий
    setNamesOfButtons(data);

    const handleButtonClick = (id) => {
        setActiveButton(id);
    };

    function filteredArray(data) {
        return data.filter((item) => {
            return item.category === buttons[activeButton].label;
        });
    }
    let newArr = activeButton === 0 ? data : filteredArray(data);
    return (
        <>
            <div className="wrapper" style={{ marginTop: "40px" }}>
                <div className="asrt">
                    <BorderedFrame
                        value="Наш ассортимент"
                        style={{ marginBottom: "50px" }}
                    />
                    {data.length > 0 ? (
                        <>
                            <div className="asrt__buttons">
                                {buttons.map((button) => (
                                    <button
                                        key={button.id}
                                        className={`asrt__btn ${
                                            activeButton === button.id
                                                ? "asrt__btn-active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleButtonClick(button.id)
                                        }
                                    >
                                        {button.label}
                                    </button>
                                ))}
                            </div>
                            <div className="asrt__cards">
                                <ProductsList items={newArr} />
                            </div>
                        </>
                    ) : (
                        <div className="nodata">
                            <p>ассортимент еще не загрузился</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Assortiment;
