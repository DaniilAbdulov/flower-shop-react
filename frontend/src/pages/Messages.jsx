import { useDispatch, useSelector } from "react-redux";
import MessagesList from "../components/Messages/MessagesList";
import "./Messages.scss";
import { useEffect } from "react";
import { getMessages } from "../redux/slices/messagesSlice";
function Messages() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch]);
    return (
        <div className="wrapper">
            <div className="messages">
                <div className="messages__container">
                    <MessagesList />
                </div>
            </div>
        </div>
    );
}
export default Messages;
