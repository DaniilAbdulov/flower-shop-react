import MessageItem from "./MessageItem";
import { useSelector } from "react-redux";
import {
    selectMessages,
    selectMessagesLoading,
} from "../../redux/slices/messagesSlice";
import Loader from "../UI/Loader";
function MessagesList() {
    const messages = useSelector(selectMessages);
    const isLoading = useSelector(selectMessagesLoading);
    return (
        <ul className="messages__list">
            {isLoading ? (
                <Loader />
            ) : messages.length > 0 ? (
                <>
                    {messages.map((msg) => (
                        <MessageItem key={msg.id} message={msg} />
                    ))}
                </>
            ) : (
                <p>Сообщений пока нет...</p>
            )}
        </ul>
    );
}
export default MessagesList;
