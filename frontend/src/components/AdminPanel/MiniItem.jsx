import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./MiniItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyDialog from "../UI/MyDialog";
import ChangeProduct from "./ChangeProduct";
import { useState } from "react";
function MiniItem(props) {
    const { id, title, img, price, available } = props.data;
    const [showEditWindow, setShowEditWindow] = useState(false);
    function handleDeleteProduct() {
        let result = window.confirm("Вы действительно хотите удалить товар ?");
        if (result) {
            alert(`Product with id ${id} deleted`);
        } else {
            return;
        }
    }
    return (
        <>
            <div className="mini-item">
                <div className="mini-item__row">
                    <div className="mini-item__img">
                        <img src={img} alt="img" />
                    </div>
                    <div className="mini-item__body">
                        <div className="mini-item__title">{title}</div>
                        <div className="mini-item__values">
                            <p>
                                {price} <span>руб.</span>
                            </p>
                            <p>
                                {available} <span>шт.</span>
                            </p>
                        </div>
                        <div className="mini-item__buttons">
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{ cursor: "pointer" }}
                                onClick={() => setShowEditWindow(true)}
                            />
                            <FontAwesomeIcon
                                icon={faTrash}
                                className="delete-icon"
                                onClick={handleDeleteProduct}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>
                </div>
                <MyDialog
                    visible={showEditWindow}
                    setVisible={setShowEditWindow}
                >
                    <ChangeProduct
                        setVisible={setShowEditWindow}
                        product={props}
                    />
                </MyDialog>
            </div>
        </>
    );
}
export default MiniItem;
