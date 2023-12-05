import { Routes, Route } from "react-router-dom";
import Contacts from "../../pages/Contacts";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import Payment from "../../pages/Payment";
import ProductPage from "../ProductPage/ProductPage";
import Cabinet from "../../pages/Cabinet";
import Auth from "../../pages/Auth";
import AdminPanel from "../../pages/AdminPanel";
import Order from "../../pages/Order";
import { useSelector } from "react-redux";
import { selectIsAdmin, selectIsAuth } from "../../redux/slices/userSlice";
import Page404 from "../UI/Page404";
function Router() {
    const isAdmin = useSelector(selectIsAdmin);
    const isAuth = useSelector(selectIsAuth);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="cart" element={<Cart />} />
                <Route path="cabinet" element={<Cabinet />} />
                <Route path="auth" element={<Auth />} />
                {isAdmin && (
                    <>
                        <Route path="admin" element={<AdminPanel />} />
                    </>
                )}
                {isAuth && (
                    <>
                        <Route path="payment" element={<Payment />} />
                        <Route path="orders/:id" element={<Order />} />
                    </>
                )}
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
export default Router;
