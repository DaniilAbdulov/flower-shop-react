import AddProduct from "../components/AdminPanel/AddProduct";
import "./AdminPanel.scss";

import ChangeProduct from "../components/AdminPanel/ChangeProduct";
import { useState } from "react";
import MyDialog from "../components/UI/MyDialog";
import AddCategory from "../components/AdminPanel/AddCategory";

function AdminPanel() {
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showAddCategory, setShowAddCategory] = useState(false);

    return (
        <div className="wrapper">
            <div className="panel">
                <div className="panel__title">Admin panel</div>
                <div className="panel__buttons">
                    <button onClick={() => setShowAddProduct(true)}>
                        Добавить товар
                    </button>
                    <button onClick={() => setShowAddCategory(true)}>
                        Добавить категорию
                    </button>
                </div>
                <div className="panel__item">
                    <MyDialog
                        visible={showAddProduct}
                        setVisible={setShowAddProduct}
                    >
                        <AddProduct
                            setVisible={setShowAddProduct}
                            buttonName="Добавить"
                        />
                    </MyDialog>
                    <MyDialog
                        visible={showAddCategory}
                        setVisible={setShowAddCategory}
                    >
                        <AddCategory setVisible={setShowAddCategory} />
                    </MyDialog>
                </div>
                <div className="panel__change-product">
                    <ChangeProduct />
                </div>
            </div>
        </div>
    );
}
export default AdminPanel;
