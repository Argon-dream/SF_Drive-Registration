import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../styles/CommonParts/header.scss";
import logo from "./../../assets/icon/logo.svg";

class Header extends Component {

    openMenu = () => {
        const menu = document.querySelector(".menu__mobile");
        menu.classList.add("is-active");
    }

    closeMenu = () => {
        const menu = document.querySelector(".menu__mobile");
        menu.classList.remove("is-active");
    }

    showAuth = () => {
        document.getElementById("logIn").classList.remove("hide");
    }

    render() {
        return (
            <header>
                <div className="menu__frame">
                    <img src={logo} alt="Logo picture" className="menu__frame-logo"/>
                    <div className="menu__frame-wrapper">
                        <nav>
                            <Link className="menu__frame-wrapper-link is-animated is-desktop is-active"
                                  to="/AboutUs">О нас</Link>
                            <Link className="menu__frame-wrapper-link is-animated is-desktop" to="">Условия</Link>
                            <Link className="menu__frame-wrapper-link is-animated is-desktop" to="/FAQ">Частые
                                вопросы</Link>
                        </nav>
                        <button className="menu__frame-wrapper-button is-desktop" onClick={() => this.showAuth()}>
                            <span>Войти</span>
                        </button>
                        <div className="menu__frame-wrapper mobile__burger icon-iconBurger is-mobile"
                             onClick={() => this.openMenu()}/>
                    </div>
                </div>
                <div className="menu__mobile is-mobile is-animated">
                    <div>
                        <img src={logo} alt="Logo picture" className="menu__mobile-logo"/>
                        <div className="menu__mobile-close icon-iconClose" onClick={() => this.closeMenu()}/>
                    </div>
                    <div className="content__container is-align-center">
                        <nav className="menu__mobile-wrapper">
                            <Link className="menu__mobile-wrapper-link is-active" to="/AboutUs">О нас</Link>
                            <Link className="menu__mobile-wrapper-link" to="">Условия</Link>
                            <Link className="menu__mobile-wrapper-link" to="/FAQ">Частые вопросы</Link>
                        </nav>
                        <button className="menu__mobile-button content__container is-align-center" onClick={() => this.showAuth()}>
                            <span>Войти</span>
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;