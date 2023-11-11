import {
    fetchAdvicedProducts,
    selectIsAdvice,
    selectIsFavorites,
} from "../../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductsList from "../Products/ProductsList";
import Loader from "../UI/Loader";
import data from "../../data/example";
import { selectUser } from "../../redux/slices/userSlice";
function UserFavoritesAndBought({ visible }) {
    const [activeButton, setActiveButton] = useState(0);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const advicedProducts = useSelector(selectIsAdvice);
    const favoriteProducts = useSelector(selectIsFavorites);
    useEffect(() => {
        if (advicedProducts.length === 0) {
            dispatch(fetchAdvicedProducts(user));
        }
    }, [dispatch, advicedProducts, user]);
    const buttons = [
        { id: 0, label: "Советуем к покупке" },
        { id: 1, label: "Избранное" },
    ];
    const handleButtonClick = (id) => {
        setActiveButton(id);
    };

    let newArr = activeButton === 0 ? advicedProducts : favoriteProducts;
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
