import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../redux/slices/userSlice";

function Login(props) {
    const toggleForm = props.toggleTypeOfForm;
    const [nickName, setNickName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        const candidat = {
            nickName,
            password,
        };
        dispatch(fetchLogin(candidat));
        setNickName("");
        setPassword("");
    };
    return (
        <div>
            <form onSubmit={handleSubmitLogin}>
                <h2>Заполните форму авторизации</h2>
                <div className="form__item">
                    <label htmlFor="nickName">Имя пользователя:</label>
                    <input
                        type="text"
                        id="nickName"
                        value={nickName}
                        onChange={(e) => setNickName(e.target.value)}
                        required
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Отправить</button>
                <p onClick={toggleForm}>Нет аккаунта ?</p>
            </form>
        </div>
    );
}
export default Login;
