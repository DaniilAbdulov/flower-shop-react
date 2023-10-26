import Form from "../components/Auth/Form";
import "./Auth.scss";
function Auth() {
    return (
        <>
            <div className="fc fc-auth">
                <div className="fc__body">
                    <div className="wrapper">
                        <Form />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Auth;
