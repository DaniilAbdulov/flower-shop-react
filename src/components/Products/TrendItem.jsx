import { NavLink } from "react-router-dom";
import "./TrendItem.scss";
import Like from "../UI/Like";
function TrendItem() {
    return (
        <>
            <div
                className="trend"
                style={{
                    backgroundImage:
                        "url(https://thypix.com/wp-content/uploads/beautiful-flower-bouquets-25.jpg)",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="trend__like">
                    <Like />
                </div>

                <NavLink to="/product/id" className="trend__title">
                    Lorem ipsum trend
                </NavLink>
            </div>
        </>
    );
}
export default TrendItem;
