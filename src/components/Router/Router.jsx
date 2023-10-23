import { Routes, Route } from "react-router-dom";
import Contacts from "../../pages/Contacts";
import About from "../../pages/About";
// import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import Payment from "../../pages/Payment";
import ProductPage from "../ProductPage/ProductPage";
import Cabinet from "../../pages/Cabinet";
import Auth from "../../pages/Auth";
function Router() {
    return (
        <div>
            <Routes>
                {/* <Route path="/" element={<MainLayout />}> */}
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="cart" element={<Cart />} />
                <Route path="payment" element={<Payment />} />
                <Route path="cabinet" element={<Cabinet />} />
                <Route path="auth" element={<Auth />} />

                <Route path="*" element={<h2>Page not found</h2>} />
                {/* </Route> */}
            </Routes>
        </div>
    );
}
export default Router;
