import React, { useState } from "react";

import Header from "./../CommonParts/Header.js";
import Warning from "./Warning.js";
import CommonInfo from "./CommonInfo.js";
import Passport from "./Passport.js";
import License from "./License.js";
import Password from "./Password.js";

import "./../../styles/Registration/Registration.scss";
import "./../../styles/Registration/Info.scss";

function Registration(props) {

    const getData = () => ({
        name: name,
        birth: birth,
        email: email,
        phone: phone,
        password: password,
        passwordtext: passwordText,
        license: {
            name: license,
            date: licenseDate
        },
        passport: {
            name: passport_,
            date: passportDate,
            who: passportWho,
            code: passportCode
        }
    });

    const handleErrors = () => {
        //mark incorrect fields
    };

    const handleClick = () => {
        handleErrors();
        props.registration_send(getData());
    }

    const [name, setName] = useState("");    
    const [birth, setBirth] = useState("");    
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordText, setPasswordText] = useState("");
    const [passport_, setPassport] = useState("");
    const [passportDate, setPassportDate] = useState("");
    const [passportWho, setPassportWho ] = useState("");
    const [passportCode, setPassportCode] = useState("");
    const [license, setLicense] = useState("");
    const [licenseDate, setLicenseDate] = useState("");

	return (
		<>
            <div className="top__frame">
                <Warning/>
                <Header/>
            </div>
            <div className="phase__frame content__container">
                <p className="phase__frame-phase">Шаг 1 из 3</p>
                <h1 className="phase__frame-main__header">Расскажите о себе</h1>
                <div className="phase__frame-fields">
                    <CommonInfo value={[name,birth,email,phone]} change={[setName,setBirth,setEmail,setPhone]}/>
                    <Passport value={[passport_,passportDate,passportWho,passportCode]} change={[setPassport,setPassportDate,setPassportWho,setPassportCode]}/>
                    <License value={[license,licenseDate]} change={[setLicense,setLicenseDate]}/>
                    <Password value={[password,passwordText]} change={[setPassword,setPasswordText]}/>
                </div>
            </div>
            <footer className="bottom__section">
                <button id="sendform" className="bottom__section-send__form isDisabled" onClick={handleClick}>Продолжить</button>
            </footer>
		</>
	);
}

export default Registration;