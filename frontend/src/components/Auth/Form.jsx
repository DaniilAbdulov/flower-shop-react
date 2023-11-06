import { useState } from "react";
import Registration from "./Registration";
import Login from "./Login";
import Loader from "../UI/Loader";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth, selectIsLoading } from "../../redux/slices/userSlice";

function Form() {
    const [isRegistration, setIsRegistration] = useState(true);
    const isLoading = useSelector(selectIsLoading);
    const isAuth = useSelector(selectIsAuth);
    function toggleTypeOfForm() {
        setIsRegistration(!isRegistration);
    }
    if (isAuth) {
        return <Navigate to="/" />;
    }
    return (
        <div className="form">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {isRegistration && (
                        <Registration toggleTypeOfForm={toggleTypeOfForm} />
                    )}
                    {!isRegistration && (
                        <Login toggleTypeOfForm={toggleTypeOfForm} />
                    )}
                </>
            )}
        </div>
    );
}

export default Form;
