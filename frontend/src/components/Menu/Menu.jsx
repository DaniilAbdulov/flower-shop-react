import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Menu.scss";

function Menu() {
    const [cartCount, setCartCount] = useState(0);
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const links = [
        { to: "/", title: "Home" },
        { to: "/about", title: "About us" },
        { to: "/contacts", title: "Contacts" },
        { to: "/cabinet", title: "D" },
        { to: !isAuth ? "/auth" : "/", title: !isAuth ? "LogIn" : "Log Out" },
        { to: !isAdmin ? "/admin" : "/", title: !isAdmin ? "Admin panel" : "" },
    ];
    const [visible, setVisible] = useState(true);
    const [device, setDevice] = useState("mobile");
    function toggleVisible() {
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }
    useEffect(() => {
        const windowInnerWidth = window.innerWidth;
        if (windowInnerWidth > 580) {
            setDevice("desktop");
        } else {
            setVisible(false);
        }
    }, []);
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logos">
                    <NavLink
                        className="header__cart cart"
                        to="/cart"
                        onClick={() => {
                            if (device === "mobile") {
                                setVisible(false);
                            }
                        }}
                    >
                        {cartCount > 0 && (
                            <div className="cart__count">{cartCount}</div>
                        )}

                        <AiOutlineShoppingCart />
                    </NavLink>
                </div>
                <div className="header__menu menu">
                    <button onClick={toggleVisible} className="menu__button">
                        <FaBars
                            className={
                                device === "mobile"
                                    ? "menu__icon-mobile"
                                    : "menu__icon"
                            }
                        >
                            icon
                        </FaBars>
                    </button>
                </div>
                <nav
                    className={
                        device === "mobile" ? "menu__body-mobile" : "menu__body"
                    }
                    style={{ display: visible ? "block" : "none" }}
                >
                    <ul
                        className={
                            device === "mobile"
                                ? "menu__list-mobile"
                                : "menu__list"
                        }
                    >
                        {links.map((link) => (
                            <li key={link.title}>
                                <NavLink
                                    to={link.to}
                                    className={
                                        device === "mobile"
                                            ? "menu__link-mobile"
                                            : "menu__link"
                                    }
                                    onClick={() => {
                                        if (device === "mobile") {
                                            setVisible(false);
                                        }
                                    }}
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Menu;
