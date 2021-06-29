import React from "react";
import "./../../styles/AboutUs/about__frame.scss";
import pic from "./../../assets/icon/pic.svg";

function Description() {

    return (
        <section className="about">
            <div className="content__container is-align-center">
                <div className="about__frame-img">
                    <img src={pic} alt="About us picture" />
                </div>
                <div>
                    <h1>О нас</h1>
                    <p className="about__frame-text">Это учебный проект, созданный с целью получения
                        боевого опыта в разработке настоящего живого веб-приложения.
                        Этот сервис имитирует работу каршеринга, в котором можно не только арендовать
                        автомобили, но и сдавать их в аренду.
                    </p>
                </div>
            </div>
        </section>
    );

}

export default Description;