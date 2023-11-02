import { NavLink } from "react-router-dom";

function PaySuccess() {
    return (
        <div>
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "20px",
                    marginBottom: "15px",
                }}
            >
                Congratulations ! Pay is success
            </h2>
            <NavLink to="/" className="po__button">
                К покупкам
            </NavLink>
        </div>
    );
}
export default PaySuccess;
