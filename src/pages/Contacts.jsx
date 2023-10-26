import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVk,
    faInstagram,
    faTelegram,
    faWhatsapp,
    faViber,
} from "@fortawesome/free-brands-svg-icons";

function Contacts() {
    return (
        <div className="wrapper">
            <div className="contact">
                <div className="contact__row">
                    <div className="contact__column">
                        <div className="contact__text">
                            <h2>
                                Для более подробной информации напишите нам !
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
                                    <FontAwesomeIcon icon={faVk} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTelegram} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faViber} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact__column">
                        <div className="contact__form"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contacts;
