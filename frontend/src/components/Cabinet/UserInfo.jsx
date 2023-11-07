import { useSelector } from "react-redux";
import Loader from "../UI/Loader";
import { selectUser } from "../../redux/slices/userSlice";
import no_photo from "../../asserts/no_photo.webp";
import { useState } from "react";

function UserInfo() {
    const [imgIsLoading, setImgIsLoading] = useState(false);
    const user = useSelector(selectUser);
    console.log(user);
    const { first_name, last_name, user_img, created_at } = user;
    const date = new Date(created_at);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const ruDate = new Intl.DateTimeFormat("ru", options).format(date);

    const image = new Image();
    image.onload = () => {
        setImgIsLoading(true);
    };
    image.onerror = () => {
        console.log("Произошла ошибка при загрузке изображения.");
    };
    image.src = user_img;

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
                                <p>Дата регистрации: {ruDate}</p>
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
