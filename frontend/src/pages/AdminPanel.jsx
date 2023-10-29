import AddProduct from "../components/AdminPanel/AddProduct";
import "./AdminPanel.scss";

import ChangeProduct from "../components/AdminPanel/ChangeProduct";

function AdminPanel() {
    return (
        <div className="wrapper">
            <div className="panel">
                <div className="panel__title">Admin panel</div>
                <div className="panel__buttons">
                    <button>Добавить товар</button>
                    <button>Изменить товар</button>
                </div>
                <div className="panel__item">
                    <AddProduct />
                </div>
                <div className="panel__change-product">
                    <ChangeProduct />
                </div>
            </div>
        </div>
    );
}
export default AdminPanel;
