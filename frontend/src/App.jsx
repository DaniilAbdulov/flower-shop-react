import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { fetchCurrentUser } from "./redux/slices/userSlice";
import Router from "./components/Router/Router";
import MainLayout from "./layouts/MainLayout";
import Footer from "./layouts/Footer";
import { selectIsAdmin } from "./redux/slices/userSlice";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, []);
    const isAdmin = useSelector(selectIsAdmin);
    console.log(isAdmin);
    return (
        <BrowserRouter>
            <MainLayout />
            <div className="App">
                <Router />
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
