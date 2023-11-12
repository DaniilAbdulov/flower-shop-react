import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import { fetchCurrentUser } from "./redux/slices/userSlice";
import Router from "./components/Router/Router";
import MainLayout from "./layouts/MainLayout";
import Footer from "./layouts/Footer";
import Error from "./components/Error/Error";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, []);

    return (
        <BrowserRouter>
            <MainLayout />
            <div className="App">
                <Router />
            </div>
            <Footer />
            <Error />
        </BrowserRouter>
    );
}

export default App;
