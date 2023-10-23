import Form from "../components/Auth/Form";
import "./Auth.scss";
function Auth() {
    return (
        <>
            <div className="fc fc-auth">
                <div className="fc__body">
                    <div className="wrapper">
                        <div className="form">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Auth;
