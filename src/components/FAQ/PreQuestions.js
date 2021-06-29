import React from "react";

import "./../../styles/FAQ/faq__frame.scss";
import faq from"./../../assets/icon/faq.svg";

function PreQuestions() {
    return (
        <>
            <section className="faq">
                <div className="content__container is-align-center">
                    <div className="faq__frame-img">
                        <img src={faq} alt="FAQ picture" />
                    </div>
                    <div>
                        <h1>Частые вопросы</h1>
                        <p className="faq__frame-text">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PreQuestions;