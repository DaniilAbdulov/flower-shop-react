import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../redux/slices/productsSlice";
import ProductsList from "../Products/ProductsList";
import BorderedFrame from "../UI/BorderedFrame";
import "./Assortiment.scss";
import Loader from "../UI/Loader";
function Assortiment() {
    const [activeButton, setActiveButton] = useState(0);
    const allProducts = useSelector(selectAllProducts);
    const buttons = [];
    function setNamesOfButtons(d) {
        const set = new Set();
        for (let i = 0; i < d.length; i++) {
            set.add(allProducts[i].category);
        }
        const categories = Array.from(set);
        for (let i = 0; i < categories.length; i++) {
            const newButton = {
                id: i,
                label: `${categories[i]}`,
            };
            buttons.push(newButton);
        }
    }
    setNamesOfButtons(allProducts);

    const handleButtonClick = (id) => {
        setActiveButton(id);
    };

    function filteredArray(allProducts) {
        return allProducts.filter((item) => {
            return item.category === buttons[activeButton].label;
        });
    }
    let newArr = filteredArray(allProducts);
    return (
        <>
            <div className="wrapper" style={{ marginTop: "40px" }}>
                <div className="asrt">
                    <BorderedFrame
                        value="Наш ассортимент"
                        style={{ marginBottom: "50px" }}
                    />
                    {allProducts.length > 0 ? (
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
                        <div className="loader">
                            <Loader />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Assortiment;
