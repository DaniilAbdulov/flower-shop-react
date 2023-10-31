import "../Home/Assortiment.scss";
import "./MyCabinet.scss";
import Loader from "../UI/Loader";
import UserInfo from "./UserInfo";
import UserFavoritesAndBought from "./UserFavoritesAndBought";
import UserOrders from "./UserOrders";
function MyCabinet() {
    return (
        <>
            <div className="cabinet">
                <h2>Личный кабинет</h2>

                <UserInfo />
                <UserOrders />
                <UserFavoritesAndBought />
            </div>
        </>
    );
}
export default MyCabinet;
