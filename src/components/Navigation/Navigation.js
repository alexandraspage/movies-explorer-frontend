import React from "react";
import { useRef } from "react";
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Navigation() {

    const location = useLocation();

    function isMain() {
        if (location.pathname === '/') {
            return true
        } else {
            return false
        }

    }

    const navRef = useRef()

    function shawNavBar() {
        navRef.current.classList.toggle("navbar__opened");
    }

    return (
        <section>
            {isMain() ?
                <nav>
                    <NavLink to="/signup" replace className="nav__registration">Регистрация</NavLink>
                    <NavLink to="/signin" replace className="nav__signin">Войти</NavLink>
                </nav>
                :
                <div>
                    <nav ref={navRef} className="nav__navbar">
                        <div className="nav__navbar-container">
                            <button onClick={shawNavBar} className="nav__close-btn nav__btn"></button>
                            <div className="nav__links">
                                <NavLink to="/" replace className={`nav__link nav__link_main ${location.pathname === '/' ? `nav__here` : ``}`}>Главная</NavLink>
                                <NavLink to="/movies" replace className={`nav__link ${location.pathname === '/movies' ? `nav__here` : ``}`}>Фильмы</NavLink>
                                <NavLink to="/saved-movies" replace className={`nav__link ${location.pathname === '/saved-movies' ? `nav__here` : ``}`}>Сохраненные фильмы</NavLink>
                            </div>
                            <NavLink to="/profile" replace className="nav__link nav__link_account"><p className="account-link">Аккаунт</p><button className="nav__account-btn"></button></NavLink>
                        </div>
                    </nav>
                    <button onClick={shawNavBar} className="nav__btn nav__open-btn"></button>
                </div>
            }
        </section>
    )
}

export default Navigation;