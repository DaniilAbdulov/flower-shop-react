import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";
function Registration(props) {
    const toggleForm = props.toggleTypeOfForm;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const signUpUser = async (candidat) => {
        try {
            const res = await axios.post(
                `${API_URL}/user/registration`,
                candidat
            );
            console.log(res.data);
        } catch (error) {}
    };
    const handleSubmitRegistration = (e) => {
        e.preventDefault();
        if (password === passwordAgain) {
            const newCandidat = {
                id: Date.now(),
                firstName,
                lastName,
                nickName,
                email,
                password,
            };
            signUpUser(newCandidat);
            setFirstName("");
            setLastName("");
            setNickName("");
            setEmail("");
            setPassword("");
            setPasswordAgain("");
        } else {
            alert("Password is not correct");
        }
    };
    return (
        <>
            <form onSubmit={handleSubmitRegistration}>
                <h2>Заполните небольшую форму регистрации</h2>
                <div className="form__item">
                    <label htmlFor="firstName">Имя:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="lastName">Фамилия:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
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
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <div className="form__item">
                    <label htmlFor="password-again">Повторите пароль:</label>
                    <input
                        type="password"
                        id="password-again"
                        value={passwordAgain}
                        onChange={(e) => setPasswordAgain(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Отправить</button>
                <p onClick={toggleForm}>Уже есть аккаунт ?</p>
            </form>
        </>
    );
}
export default Registration;
