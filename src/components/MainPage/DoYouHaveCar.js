import React from "react";
import "./../../styles/MainPage/have_car.scss";
import cena from "./../../assets/icon/cena.svg";
import komis from "./../../assets/icon/komis.svg";
import money from "./../../assets/icon/money.svg";
import strax from "./../../assets/icon/strax.svg";
import line from "./../../assets/icon/Line.png";
        
function DoYouHaveCar () {
    return (
        <section className="have__car">
            <div className="content__container is-align-center">
                <h2>У вас есть автомобиль?</h2>
                <p>Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте.</p>
                <div className="have__car-advantages">
                    <div className="have__car-advantages-first">
                        <img src={ cena } alt = 'Price yourself' className="have__car-advantages-img" />
                        <p className="have__car-advantages-first is-data">Вы сами указываете цену</p>
                    </div>
                    <img src={ line } alt = 'next advantage' className="have__car-advantages-line" />
                    <div className="have__car-advantages-second">
                        <img src={ strax } alt = 'We insure cars' className="have__car-advantages-img" />
                        <p className="have__car-advantages-second is-data">Мы страхуем автомобили</p>
                    </div>
                    <img src={ line } alt = 'next advantage' className="have__car-advantages-line" />
                    <div className="have__car-advantages-third">
                        <img src={ komis } alt = 'third advantage' className="have__car-advantages-img" />
                        <p className="have__car-advantages-third is-data">Наша комиссия всего 3%</p>
                    </div>
                    <img src={ line } alt = 'next advantage' className="have__car-advantages-line" />
                    <div className="have__car-advantages-fourth">
                        <img src={ money } alt = 'fourth advantage' className="have__car-advantages-img" />
                        <p className="have__car-advantages-fourth is-data">Выплаты каждую неделю</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DoYouHaveCar;