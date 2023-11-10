import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/slices/userSlice";
import MyCabinet from "../components/Cabinet/MyCabinet";
import UnAuth from "../components/UI/UnAuth";

function Cabinet() {
    const isAuth = useSelector(selectIsAuth);
    return (
        <>
            {isAuth ? (
                <>
                    <div className="wrapper">
                        <MyCabinet />
                    </div>
                </>
            ) : (
                <UnAuth location="Личный кабинет" />
            )}
        </>
    );
}
export default Cabinet;
