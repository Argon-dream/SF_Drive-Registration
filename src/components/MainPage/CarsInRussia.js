import React from "react";
import {Link} from "react-router-dom";
import startPic from "../../assets/icon/startPic.svg";
import startPic_min from "../../assets/icon/startPic_min.svg";
import "../../styles/MainPage/cars_russia.scss";


function CarsInRussia () {
    return (
        <section className="cars_russia">
            <div className="content__container is-desktop">
                <div className="cars_russia-img">
                    <img src={ startPic } alt="About us picture" />
                    <div className="cars_russia-img-box">
                        <h1>Каршеринг в любой <br /> точке России</h1>
                        <p>Будьте всегда за рулём во время путешествий <br /> и командировок.</p>
                        <Link className="cars_russia-img-box-button" to="/Registration">Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
            <div className="content__container is-align-center is-mobile">
                <div className="cars_russia-img">
                    <img src={ startPic_min } alt="About us picture" />
                    <div className="cars_russia-img-box">
                        <h1>Каршеринг в любой <br /> точке России</h1>
                        <p>Будьте всегда за рулём во время путешествий <br /> и командировок.</p>
                        <Link className="cars_russia-img-box-button" to="/Registration">Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
        </section>
    ); 
}

export default CarsInRussia;