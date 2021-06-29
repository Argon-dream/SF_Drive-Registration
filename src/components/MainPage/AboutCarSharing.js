import React from "react";
import autoMoto from "../../assets/icon/autoMoto.svg";
import connect from "../../assets/icon/connect.svg";
import womenOnAuto from "../../assets/icon/womenOnAuto.svg";
import "../../styles/MainPage/about_carSharing.scss";

function AboutCarSharing () {
    return (
        <section className="about_carSharing">
            <div className="content__container is-align-center">
                <div className="about_carSharing-rent">
                    <img src={ womenOnAuto } alt="Rent directly" />
                    <div className="cars_russia-rent-box">
                        <h2>Аренда напрямую от владельцев</h2>
                        <p>Вы получите автомобиль от его собственника, а мы проверим юридическую чистоту и техническую исправность.</p>
                    </div>
                </div>
                <div className="about_carSharing-auto">
                    <img src={ autoMoto } alt="Different autos" />
                    <div className="cars_russia-auto-box">
                        <h2>Автомобили на любой вкус</h2>
                        <p>Вы всегда можете подобрать автомобиль любого класса от бюджетных моделей до премиум-класса и спорткаров.</p>
                    </div>
                </div>
                <div className="about_carSharing-guarantee">
                    <img src={ connect } alt="Guarantee" />
                    <div className="cars_russia-guarantee-box">
                        <h2>Гарантия честной аренды</h2>
                        <p>Общение и оплата происходит через наш сервис, что предотвращает вас от обмана.</p>
                    </div>
                </div>
            </div>
        </section>
    ); 
}

export default AboutCarSharing;