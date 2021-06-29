import React from "react";
import "./../../styles/MainPage/how_rent.scss";
import one from "./../../assets/icon/one.svg";
import two from "./../../assets/icon/two.svg";
import three from "./../../assets/icon/three.svg";
import line from "./../../assets/icon/Line.png";

function HowRentCar () {
    return (
        <section className="how__rent is-grey">
            <div className="content__container is-align-center">
                <h2>Как арендовать автомобиль</h2>
                <div className="how__rent-steps">
                    <div className="how__rent-steps-first">
                        <img src={ one } alt = 'first step' className="how__rent-steps-step" />
                        <p className="how__rent-steps-first is-data">Выберите автомобиль</p>
                    </div>
                    <img src={ line } alt = 'next step' className="how__rent-steps-line" />
                    <div className="how__rent-steps-second">
                        <img src={ two } alt = 'second step' className="how__rent-steps-step" />
                        <p className="how__rent-steps-second is-data">Забронируйте дату и время</p>
                    </div>
                    <img src={ line } alt = 'next step' className="how__rent-steps-line" />
                    <div className="how__rent-steps-third">
                        <img src={ three } alt = 'third step' className="how__rent-steps-step" />
                        <p className="how__rent-steps-third is-data">Получите автомобиль</p>
                    </div>
                </div>
            </div>
         </section>
    ); 
}

export default HowRentCar;