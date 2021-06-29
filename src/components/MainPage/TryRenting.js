
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/MainPage/try_renting.scss";
import boy from "../../assets/icon/boy.svg";

function TryRenting () {
    return (
        <section className="try_renting">
            <div className="content__container is-align-center">
                <div className="try_renting-rent">
                    <img src={ boy } alt="Try renting" />
                    <div className="try_renting-rent-box">
                        <h2>Попробуйте аренду на себе</h2>
                        <Link className="try_renting-rent-box-button" to="/Registration">Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TryRenting;