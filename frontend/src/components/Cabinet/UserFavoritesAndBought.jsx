import {
    fetchAdvicedProducts,
    fetchFavoriteProducts,
    selectIsAdvice,
    selectIsFavorites,
} from "../../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductsList from "../Products/ProductsList";
import Loader from "../UI/Loader";
import { selectUserId } from "../../redux/slices/userSlice";
function UserFavoritesAndBought({ visible }) {
    const [activeButton, setActiveButton] = useState(0);
    const dispatch = useDispatch();
    const advicedProducts = useSelector(selectIsAdvice);
    const favoriteProducts = useSelector(selectIsFavorites);
    const userId = useSelector(selectUserId);
    useEffect(() => {
        if (activeButton === 0) {
            dispatch(fetchAdvicedProducts(userId));
        } else {
            dispatch(fetchFavoriteProducts());
        }
    }, [dispatch, activeButton, userId]);
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
            {newArr.length > 0 ? (
                <>
                    <div className="asrt__cards">
                        <ProductsList items={newArr} />
                    </div>
                </>
            ) : newArr.length === 0 ? (
                <>
                    <p>List is empty</p>
                </>
            ) : (
                <>
                    <div className="loader" style={{ width: "100%" }}>
                        <Loader />
                    </div>
                </>
            )}
        </div>
    );
}
export default UserFavoritesAndBought;
