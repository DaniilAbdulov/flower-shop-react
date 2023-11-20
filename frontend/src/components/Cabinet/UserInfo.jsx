import { useDispatch, useSelector } from "react-redux";
import Loader from "../UI/Loader";
import { selectUser } from "../../redux/slices/userSlice";
import no_photo from "../../asserts/no_photo.webp";
import { useEffect, useState } from "react";
import { selectIsFavorites } from "../../redux/slices/productsSlice";
import {
    getOrdersInfo,
    selectOrdersInfo,
    selectOrdersInfoLoading,
} from "../../redux/slices/ordersSlice";

function UserInfo() {
    const [imgIsLoading, setImgIsLoading] = useState(false);
    const user = useSelector(selectUser);
    const ordersInfo = useSelector(selectOrdersInfo);
    const favoriteProducts = useSelector(selectIsFavorites);
    const loadingOrdersInfo = useSelector(selectOrdersInfoLoading);
    const { first_name, last_name, user_img, created_at, email } = user;
    const image = new Image();
    image.onload = () => {
        setImgIsLoading(true);
    };
    image.onerror = () => {
        console.log("Произошла ошибка при загрузке изображения.");
    };
    image.src = user_img ? user_img : no_photo;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrdersInfo());
    }, [dispatch]);
    return (
        <div>
            {user ? (
                <>
                    <div className="cabinet__user user">
                        <div className="user__info">
                            <div className="user__image">
                                {imgIsLoading ? (
                                    <img
                                        src={user_img ? user_img : no_photo}
                                        alt="avatar"
                                    />
                                ) : (
                                    <Loader />
                                )}
                            </div>
                            <div className="user__name">
                                <h2>
                                    {first_name} {last_name}
                                </h2>
                                <p>{email}</p>
                                <p>Дата регистрации: {created_at}</p>
                            </div>
                        </div>
                        <div className="user__stats us">
                            <div className="us__item">
                                <p>Сумма покупок</p>
                                <span>
                                    {!loadingOrdersInfo && ordersInfo
                                        ? ordersInfo.total
                                        : "0"}
                                </span>
                            </div>
                            {favoriteProducts.length > 0 && (
                                <>
                                    <div className="us__item">
                                        <p>В избранном</p>
                                        <span>{favoriteProducts.length}</span>
                                    </div>
                                </>
                            )}
                            <div className="us__item">
                                <p>Заказов</p>
                                <span>
                                    {!loadingOrdersInfo && ordersInfo
                                        ? ordersInfo.count
                                        : "0"}
                                </span>
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
        </div>
    );
}
export default UserInfo;
//select count(id),sum(total_price) from orders where users_id = 9 group by users_id
//Получение кол-ва заказов и суммы заказов
//select count(product_id) from favorites where users_id = 9 group by users_id
//товаров в избранном
