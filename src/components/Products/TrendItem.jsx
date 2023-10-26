import { NavLink } from "react-router-dom";
import "./TrendItem.scss";
import Like from "../UI/Like";
function TrendItem({ value }) {
    const { id, img, isFavorite, title } = value;

    return (
        <div>
            <div
                className="trend"
                style={{
                    backgroundImage: `url("${img}")`,
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="trend__like">
                    <Like like={isFavorite} id={id} />
                </div>

                <NavLink to={`product/${id}`} className="trend__title">
                    {title}
                </NavLink>
            </div>
        </div>
    );
}
export default TrendItem;
