import { useState } from "react";
import ProductsList from "../Products/ProductsList";
import Loader from "../UI/Loader";
import data from "../../data/example";
function UserFavoritesAndBought({ visible }) {
    const [activeButton, setActiveButton] = useState(0);
    const buttons = [
        { id: 0, label: "Советуем к покупке" },
        { id: 1, label: "Избранное" },
    ];
    const handleButtonClick = (id) => {
        setActiveButton(id);
    };

    function filteredArray(data) {
        return data.filter((item) => {
            return item.isFavorite;
        });
    }
    let newArr = activeButton === 0 ? data : filteredArray(data);
    return (
        <div
            className="asrt"
            style={{
                position: visible ? "relative" : "static",
                zIndex: visible ? "-1" : "",
            }}
        >
            <div className="asrt__buttons">
                {buttons.map((button) => (
                    <button
                        key={button.id}
                        className={`asrt__btn ${
                            activeButton === button.id ? "asrt__btn-active" : ""
                        }`}
                        onClick={() => handleButtonClick(button.id)}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
            {data.length > 0 ? (
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
    );
}
export default UserFavoritesAndBought;
