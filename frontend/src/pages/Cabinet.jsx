import { useState } from "react";
import { NavLink } from "react-router-dom";
import MyCabinet from "../components/Cabinet/MyCabinet";
function Cabinet() {
    const [isAuth, setIsAuth] = useState(true);
    return (
        <>
            {isAuth ? (
                <>
                    <div className="wrapper">
                        <MyCabinet />
                    </div>
                </>
            ) : (
                <>
                    Личный кабинет не доступен. Пожалуйста{" "}
                    <NavLink to="/auth">авторизуйтесь</NavLink>
                </>
            )}
        </>
    );
}
export default Cabinet;
