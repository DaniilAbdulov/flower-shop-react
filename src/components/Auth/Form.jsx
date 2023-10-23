import { useState } from "react";
import Registration from "./Registration";
import Login from "./Login";

function Form() {
    const [isRegistration, setIsRegistration] = useState(true);

    function toggleTypeOfForm() {
        setIsRegistration(!isRegistration);
    }
    return (
        <>
            {isRegistration && (
                <Registration toggleTypeOfForm={toggleTypeOfForm} />
            )}
            {!isRegistration && <Login toggleTypeOfForm={toggleTypeOfForm} />}
        </>
    );
}

export default Form;
