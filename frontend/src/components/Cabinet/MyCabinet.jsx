import "../Home/Assortiment.scss";
import "./MyCabinet.scss";
import Loader from "../UI/Loader";
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";
import UserFavoritesAndBought from "./UserFavoritesAndBought";
import UserOrders from "./UserOrders";
import { selectIsAuth } from "../../redux/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MyDialog from "../UI/MyDialog";
import { useState } from "react";
function MyCabinet() {
    const isAuth = useSelector(selectIsAuth);
    const [showOrders, setShowOrders] = useState(false);
    return (
        <>
            <div className="cabinet">
                <h2>Личный кабинет</h2>
                {isAuth && (
                    <>
                        <UserInfo />
                        <div
                            className="cabinet__showmeOrders"
                            onClick={() => setShowOrders(true)}
                        >
                            <button>
                                <FontAwesomeIcon icon={faBagShopping} />
                            </button>
                            <h2>Показать мои заказы</h2>
                        </div>
                        <MyDialog
                            visible={showOrders}
                            setVisible={setShowOrders}
                        >
                            <UserOrders />
                        </MyDialog>
                        <UserFavoritesAndBought visible={showOrders} />
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
