import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
    faVk,
    faInstagram,
    faTelegram,
    faWhatsapp,
    faViber,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.scss";

function Contacts() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    function handleSubmitMessage(e) {
        e.preventDefault();
        const newMessage = {
            name,
            phone,
            message,
        };
        setName("");
        setPhone("");
        setMessage("");
    }
    return (
        <div className="wrapper">
            <div className="contact">
                <div className="contact__row">
                    <div className="contact__column">
                        <div className="contact__text">
                            <h2>
                                Для более подробной информации <br /> свяжитесь
                                с нами
                            </h2>
                            <p>
                                Отправьте нашему продавцу быстрое сообщение или
                                вопрос, пожелания к заказу, и он ответит вам при
                                первой же возможности 🙂
                            </p>
                            <p>
                                Либо можете написать нам в одной из социальных
                                сетей или мессенджере
                            </p>
                        </div>
                        <div className="contact__social">
                            <ul>
                                <li>
                                    <a href="https://vk.com/" target="blank">
                                        <FontAwesomeIcon
                                            icon={faVk}
                                            style={{ color: "#0072bc" }}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faInstagram}
                                            style={{ color: "#E1306C" }}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://web.telegram.org/k/"
                                        target="blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faTelegram}
                                            style={{ color: "#0088cc" }}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.whatsapp.com/"
                                        target="blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faWhatsapp}
                                            style={{ color: "#43d854" }}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.viber.com/ru/"
                                        target="blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faViber}
                                            style={{ color: "#7360F2" }}
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact__column">
                        <div className="contact__form">
                            <form onSubmit={handleSubmitMessage}>
                                <h2>Отправьте нам сообщение</h2>
                                <div className="form__item">
                                    <label htmlFor="name">Ваше имя:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="form__item">
                                    <label htmlFor="phone">
                                        Номер телефона:
                                    </label>
                                    <input
                                        type="phone"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="form__item">
                                    <label htmlFor="message">Сообщение:</label>
                                    <input
                                        type="text"
                                        id="message"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <button type="submit">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contacts;
