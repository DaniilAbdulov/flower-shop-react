import { useState } from "react";
import Registration from "./Registration";
import Login from "./Login";

function Form() {
    const [isRegistration, setIsRegistration] = useState(true);

    function toggleTypeOfForm() {
        setIsRegistration(!isRegistration);
    }
    return (
        <div className="form">
            {isRegistration && (
                <Registration toggleTypeOfForm={toggleTypeOfForm} />
            )}
            {!isRegistration && <Login toggleTypeOfForm={toggleTypeOfForm} />}
        </div>
    );
}

export default Form;
