import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function FinalPay({ setNewStage }) {
    return (
        <div>
            <div className="final-pay">
                <div className="final-pay__close">
                    <NavLink to="/cabinet">
                        <FontAwesomeIcon
                            icon={faXmark}
                            style={{ color: "#050101", fontSize: "20px" }}
                        />
                    </NavLink>
                </div>
                <div
                    className="final-pay__text"
                    style={{ marginBottom: "15px", textAlign: "center" }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem eveniet fugiat illum doloremque incidunt ipsum
                    pariatur ea atque, esse quidem!
                </div>
                <div
                    className="final-pay__button po__button"
                    onClick={() => setNewStage("paySuccess")}
                >
                    Оплатить
                </div>
            </div>
        </div>
    );
}
export default FinalPay;
