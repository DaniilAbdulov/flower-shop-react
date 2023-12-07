import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../redux/slices/messagesSlice";

function MessageItem(props) {
    const { id, date_time, message, name, number } = props.message;
    const dispatch = useDispatch();
    function handleDeleteMessage() {
        dispatch(deleteMessage(id));
    }
    return (
        <li className="message">
            <h2 className="message__author">{name}</h2>
            <h3 className="message__number">{number}</h3>
            <h3 className="message__date">{date_time}</h3>
            <p className="message__msg">{message}</p>
            <FontAwesomeIcon
                icon={faTrash}
                className="delete-icon"
                onClick={handleDeleteMessage}
                style={{ cursor: "pointer" }}
            />
        </li>
    );
}
export default MessageItem;
