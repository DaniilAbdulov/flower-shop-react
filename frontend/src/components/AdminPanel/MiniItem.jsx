import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./MiniItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MiniItem(props) {
    const { id, title, img, price, available } = props.data;
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
                            />
                            <FontAwesomeIcon
                                icon={faTrash}
                                className="delete-icon"
                                onClick={() => handleDeleteProduct(id)}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MiniItem;
