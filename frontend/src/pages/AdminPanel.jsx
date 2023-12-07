import FormOfProduct from "../components/AdminPanel/FormOfProduct";
import "./AdminPanel.scss";
import Loader from "../components/UI/Loader";
import ProductsListForChange from "../components/AdminPanel/ProductsListForChange";
import { useEffect, useState } from "react";
import MyDialog from "../components/UI/MyDialog";
import AddCategory from "../components/AdminPanel/AddCategory";
import Statistic from "../components/AdminPanel/Statistic";
import { useDispatch, useSelector } from "react-redux";
import {
    getPaidOrders,
    selectChangeProductLoading,
    selectCreateProductLoading,
    selectDeleteProductLoading,
} from "../redux/slices/adminPanelSlice";
import { selectAllProductsLoading } from "../redux/slices/productsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import UserOrders from "../components/Cabinet/UserOrders";
import PaidOrdersList from "../components/AdminPanel/PaidOrdersList";
import DeleteCategory from "../components/AdminPanel/DeleteCategory";
import { NavLink } from "react-router-dom";

function AdminPanel() {
    const [showOrders, setShowOrders] = useState(false);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showFormOfChangeCategory, setShowFormOfChangeCategory] =
        useState(false);
    const [showStatistic, setShowStatistic] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const productLoading = useSelector(selectAllProductsLoading);
    const deleteLoading = useSelector(selectDeleteProductLoading);
    const createLoading = useSelector(selectCreateProductLoading);
    const changeLoading = useSelector(selectChangeProductLoading);
    const dispatch = useDispatch();
    function fetchOrdersHandler() {
        dispatch(getPaidOrders());
    }
    useEffect(() => {
        setIsLoading(
            productLoading || deleteLoading || createLoading || changeLoading
        );
    }, [productLoading, deleteLoading, createLoading, changeLoading]);
    return (
        <div className="wrapper">
            <div
                className="panel__loader"
                style={{ display: !isLoading ? "none" : "block" }}
            >
                <Loader />
            </div>
            <div className="panel" style={{ opacity: isLoading ? "0.5" : "1" }}>
                <div className="panel__title">Admin panel</div>
                <div className="panel__buttons">
                    <button onClick={() => setShowAddProduct(true)}>
                        Добавить товар
                    </button>
                    <button onClick={() => setShowFormOfChangeCategory(true)}>
                        Добавить/удалить категорию
                    </button>
                    <button onClick={() => setShowStatistic(true)}>
                        Посмотреть статистику
                    </button>
                    <button>
                        <NavLink to="/messages" style={{ color: "black" }}>
                            Сообщения пользователей
                        </NavLink>
                    </button>
                </div>
                <div
                    className="cabinet__showmeOrders"
                    onClick={() => {
                        setShowOrders(true);
                        fetchOrdersHandler();
                    }}
                >
                    <button>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </button>
                    <h2>Показать оплаченные заказы</h2>
                </div>
                <MyDialog visible={showOrders} setVisible={setShowOrders}>
                    <PaidOrdersList />
                </MyDialog>
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
                        visible={showFormOfChangeCategory}
                        setVisible={setShowFormOfChangeCategory}
                    >
                        <AddCategory setVisible={setShowFormOfChangeCategory} />
                        <DeleteCategory
                            setVisible={setShowFormOfChangeCategory}
                        />
                    </MyDialog>
                    <MyDialog
                        visible={showStatistic}
                        setVisible={setShowStatistic}
                    >
                        <Statistic
                            visible={showStatistic}
                            setVisible={setShowStatistic}
                        />
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
