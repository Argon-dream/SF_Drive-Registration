import React, {Fragment} from "react";
import "./../../styles/FAQ/questions__frame.scss";

function Questions() {

    let questionsAndAnswers = [
        {"questions":"Могу ли я отменить бронь?",
            "answers":"Да, это абсолютно бесплатно."},

        {"questions":"Могу ли я вернуть деньги, если не подошёл автомобиль?",
            "answers":"Если Вы не воспользовались автомобилем и он Вам не подошёл - Вы можете вернуть все деньги в полном объеме."},

        {"questions":"Что делать, если случилось ДТП?",
            "answers":"Пожалуйста, оставайтесь на месте и свяжитесь с нами по круглосуточному номеру: +7 912 123-45-67."},

        {"questions":"Могу ли я оставить автомобиль в удобном для меня месте?",
            "answers":"Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили."},

        {"questions":"Что делать, если собственник просит заплатить ему напрямую?",
            "answers":"Данное предложение может быть мошеничеством. Советуем пользоваться приложением для оплаты услуг."},

        {"questions":"Должен ли я заправлять автомобиль?",
            "answers":"При возвращении автомобиля Вам необходимо вернуть его с полным баком."},

    ];

    function clickCollapsibleBlock(event)  {

        event.target.classList.toggle("active");
        let content = event.target.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

    let collapsibleButtons = questionsAndAnswers.map((text,index) => {
        return <Fragment key={index}>
            <button key={index} className="questions__frame collapsible" onClick={clickCollapsibleBlock}>
                { text.questions }
            </button>
            <div className="questions__frame content">
                <p> { text.answers } </p>
            </div>
        </Fragment>
    });

    return (
        <section className="questions">
            <div className = "questions__frame content__container is-align-center">
               {collapsibleButtons}
            </div>
        </section>
    )
}

export default Questions;