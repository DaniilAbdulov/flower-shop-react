import data from "../../data/example";
import Loader from "../UI/Loader";
function UserInfo() {
    return (
        <div>
            {data.length > 0 ? (
                <>
                    <div className="cabinet__user user">
                        <div className="user__info">
                            <div className="user__image">
                                <img
                                    src="https://avatars.githubusercontent.com/u/118374108?v=4"
                                    alt="avatar"
                                />
                            </div>
                            <div className="user__name">
                                <p>Daniil Abdulov</p>
                            </div>
                        </div>
                        <div className="user__stats us">
                            <div className="us__item">
                                <p>Сумма покупок</p>
                                <p>1 200 000</p>
                            </div>
                            <div className="us__item">
                                <p>Товаров в избранном</p>
                                <p>12</p>
                            </div>
                            <div className="us__item">
                                <p>Товаров куплено</p>
                                <p>12</p>
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
