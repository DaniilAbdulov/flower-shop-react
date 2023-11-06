import "../Home/Assortiment.scss";
import "./MyCabinet.scss";
import Loader from "../UI/Loader";
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";
import UserFavoritesAndBought from "./UserFavoritesAndBought";
import UserOrders from "./UserOrders";
import { selectIsAuth } from "../../redux/slices/userSlice";
import { Link } from "react-router-dom";
function MyCabinet() {
    const isAuth = useSelector(selectIsAuth);
    return (
        <>
            <div className="cabinet">
                <h2>Личный кабинет</h2>
                {isAuth && (
                    <>
                        <UserInfo />
                        <UserOrders />
                        <UserFavoritesAndBought />
                    </>
                )}
                {!isAuth && (
                    <div className="cabinet-unauth">
                        <h2>В данный момент вы не авторизованы</h2>
                        <p>
                            Что бы получить доступ к личному кабинету,
                            пожалуйста, авторизуйтесь
                        </p>
                        <Link to="/auth/">Авторизоваться</Link>
                    </div>
                )}
            </div>
        </>
    );
}
export default MyCabinet;
