import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Menu.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    logOutUser,
    selectIsAdmin,
    selectIsAuth,
    selectFirstSymbols,
} from "../../redux/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { selectCartTotalCount } from "../../redux/slices/cartSlice";
function Menu() {
    const cartTotalCount = useSelector(selectCartTotalCount);
    const isAdmin = useSelector(selectIsAdmin);
    const isAuth = useSelector(selectIsAuth);
    const firstSymbols = useSelector(selectFirstSymbols);
    const links = [
        { to: "/", title: "Home" },
        { to: "/about", title: "About us" },
        { to: "/contacts", title: "Contacts" },
        { to: "/cabinet", title: firstSymbols ? `${firstSymbols}` : `Cabinet` },
        { to: !isAuth ? "/auth" : "/", title: !isAuth ? "LogIn" : "Log Out" },
        { to: !isAdmin ? "/" : "/admin", title: !isAdmin ? "" : "Admin panel" },
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
    const dispatch = useDispatch();
    function logOutUserHandler() {
        dispatch(logOutUser());
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
                        className="header__cart ccount"
                        to="/cart"
                        onClick={() => {
                            if (device === "mobile") {
                                setVisible(false);
                            }
                        }}
                    >
                        {cartTotalCount && (
                            <div className="ccount__count">
                                {cartTotalCount}
                            </div>
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
                                {link.title !== "Log Out" && (
                                    <>
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
                                    </>
                                )}
                                {link.title === "Log Out" && (
                                    <>
                                        <FontAwesomeIcon
                                            icon={faRightFromBracket}
                                            style={{
                                                cursor: "pointer",
                                                color: "white",
                                                fontSize: "20px",
                                            }}
                                            onClick={() => logOutUserHandler()}
                                        />
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Menu;
