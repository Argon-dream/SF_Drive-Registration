import React from "react";
import "./../../styles/AboutUs/contact__frame.scss";

function Contacts() {

    return (
        <section className="contact__frame is-grey">
            <div className="content__container is-align-center">
                <h2>Контакты</h2>
                <div className="contact__frame-contacts">
                    <div className="contact__frame-contacts-first">
                        <p className="contact__frame-contacts-first is-text">Электронная почта</p>
                        <p className="contact__frame-contacts-first is-data">drive@skillfactory.com</p>
                    </div>
                    <div className="contact__frame-contacts-second">
                        <p className="contact__frame-contacts-second is-text">Телефон</p>
                        <p className="contact__frame-contacts-second is-data">+7 912 123 45 67</p>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Contacts;