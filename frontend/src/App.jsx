import { BrowserRouter } from "react-router-dom";

import "./App.scss";

import Router from "./components/Router/Router";
import MainLayout from "./layouts/MainLayout";
import Footer from "./layouts/Footer";

function App() {
    return (
        <BrowserRouter>
            <MainLayout />
            <div className="App">
                <Router></Router>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
