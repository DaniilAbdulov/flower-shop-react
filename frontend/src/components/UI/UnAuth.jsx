import { Link } from "react-router-dom";
import "./UnAuth.scss";
function UnAuth({ location }) {
    return (
        <div className="wrapper">
            <div className="unauth">
                <div className="unauth__title">
                    <h2>В данный момент вы не авторизованы</h2>
                </div>
                <div className="unauth__text">
                    <p>
                        {location} недоступен. Что бы получить доступ,
                        пожалуйста, авторизуйтесь
                    </p>
                </div>
                <Link to="/auth/">Авторизоваться</Link>
            </div>
        </div>
    );
}
export default UnAuth;
