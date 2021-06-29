import React from "react";
import "./../../styles/AboutUs/teams__frame.scss";
import TeamItem from "./TeamItem";

function Team() {

    let heading = "Команда";

    return (
        <section className="teams__frame">
            <div className="content__container is-align-center">
            <h2> { heading } </h2>
                <div className="teams__frame-team">
                    <TeamItem />
                </div>
            </div>
        </section>
    )
}

export default Team;