import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";
function Login(props) {
    const toggleForm = props.toggleTypeOfForm;
    const [nickName, setNickName] = useState("");
    const [password, setPassword] = useState("");
    const logInUser = async (candidat) => {
        try {
            const res = await axios.post(`${API_URL}/user/login`, candidat);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        const candidat = {
            nickName,
            password,
        };
        logInUser(candidat);
        setNickName("");
        setPassword("");
    };
    return (
        <>
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
        </>
    );
}
export default Login;
