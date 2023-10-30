import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import "./App.scss";

import Router from "./components/Router/Router";
import MainLayout from "./layouts/MainLayout";
import Footer from "./layouts/Footer";
import { API_URL } from "./config";

function App() {
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const res = await axios.get(`${API_URL}/user/auth`);
                console.log(res);
            } catch (error) {
                // Handle error
            }
        };
        getCurrentUser();
    }, []);

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
