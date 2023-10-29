import FormOfProduct from "../components/AdminPanel/FormOfProduct";
import "./AdminPanel.scss";

import ProductsListForChange from "../components/AdminPanel/ProductsListForChange";
import { useState } from "react";
import MyDialog from "../components/UI/MyDialog";
import AddCategory from "../components/AdminPanel/AddCategory";
import Statistic from "../components/AdminPanel/Statistic";

function AdminPanel() {
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [showStatistic, setShowStatistic] = useState(false);

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
                    <button onClick={() => setShowStatistic(true)}>
                        Посмотреть статистику
                    </button>
                </div>
                <div className="panel__item">
                    <MyDialog
                        visible={showAddProduct}
                        setVisible={setShowAddProduct}
                    >
                        <FormOfProduct
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
                    <MyDialog
                        visible={showStatistic}
                        setVisible={setShowStatistic}
                    >
                        <Statistic setVisible={setShowStatistic} />
                    </MyDialog>
                </div>
                <div className="panel__change-product">
                    <ProductsListForChange />
                </div>
            </div>
        </div>
    );
}
export default AdminPanel;
