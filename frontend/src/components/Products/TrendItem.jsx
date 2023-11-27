import { NavLink } from "react-router-dom";
import no_photo from "../../asserts/no_photo.webp";
import "./TrendItem.scss";
import Like from "../UI/Like";
import { useEffect, useState } from "react";
function TrendItem({ value }) {
    const { id, img, isfavorite, title } = value;
    // const [imgIsLoading, setImgIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        const image = new Image();

        // image.onload = () => {
        //     setImgIsLoading(true);
        // };

        image.onerror = () => {
            setHasError(true);
            console.log("Произошла ошибка при загрузке изображения.");
        };

        image.src = img;

        return () => {
            image.onload = null;
            image.onerror = null;
        };
    }, [img]);
    return (
        <div>
            <div
                className="trend"
                style={{
                    backgroundImage: `url("${hasError ? no_photo : img}")`,
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="trend__like">
                    <Like like={isfavorite} id={id} />
                </div>

                <NavLink to={`product/${id}`} className="trend__title">
                    {title}
                </NavLink>
            </div>
        </div>
    );
}
export default TrendItem;
