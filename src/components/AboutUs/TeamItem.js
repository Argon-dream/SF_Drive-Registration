import React from "react";
import "./../../styles/AboutUs/teams__frame.scss";
import II from "./../../assets/photoUs/II.png";
import AS from "./../../assets/photoUs/AS.png";
import DJ from "./../../assets/photoUs/DJ.png";
import NM from "./../../assets/photoUs/NM.png";
import ID from "./../../assets/photoUs/ID.png";
import MS from "./../../assets/photoUs/MS.png";

function TeamItem () {
    let persons = [
        {"name":"Иван",
            "surname":"Иванов",
            "position":"СЕО",
            "photo": II,
            "alt":"Иван Иванов"},

        {"name":"Алексей",
            "surname":"Смирнов",
            "position":"Frontend-разработчик",
            "photo": AS,
            "alt":"Алексей Смирнов"},

        {"name":"Денис",
            "surname":"Ярцев",
            "position":"Backend-разработчик",
            "photo": DJ,
            "alt":"Денис Ярцев"},

        {"name":"Николай",
            "surname":"Морозов",
            "position":"Дизайнер",
            "photo": NM,
            "alt":"Николай Морозов"},

        {"name":"Ирина",
            "surname":"Деева",
            "position":"Копирайтер",
            "photo": ID,
            "alt":"Ирина Деева"},

        {"name":"Мария",
            "surname":"Стрелкова",
            "position":"SMM",
            "photo": MS,
            "alt":"Мария Стрелкова"},
    ];

    let personBlock = persons.map((person,index) => {
        return <div key={index} className="teams__frame-team-item">
                   <img src={ person.photo } alt = { person.alt } />
                   <p className="teams__frame-team-item is-name"> { person.name } { person.surname } </p>
                   <p className="teams__frame-team-item is-spec"> { person.position } </p>
               </div>
    });

    return (
        personBlock
    )
}

export default TeamItem;