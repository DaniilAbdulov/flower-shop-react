import { NavLink } from "react-router-dom";
import no_photo from "../../asserts/no_photo.webp";
import "./TrendItem.scss";
import useImageLoader from "../../hooks/useImageLoader";
function TrendItem({ value }) {
    const { id, img } = value;
    const { hasError } = useImageLoader(img);
    return (
        <div>
            <NavLink
                to={`product/${id}`}
                className="trend"
                style={{
                    backgroundImage: `url("${hasError ? no_photo : img}")`,
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            ></NavLink>
        </div>
    );
}
export default TrendItem;
