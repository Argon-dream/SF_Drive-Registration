import React from "react";
import "./../../styles/CommonParts/footer.scss";

function Footer() {

    return (
            <footer className="footer__frame">
                <span className="footer__frame-copyright">© SkillDrive Inc. 2020</span>
                <div className="footer__frame-socials">
                    <a href="" className="icon-iconVK" target="_blank" rel="nofollow" />
                    <a href="" className="icon-iconInstagram" target="_blank" rel="nofollow" />
                    <a href="" className="icon-iconFacebook" target="_blank" rel="nofollow" />
                </div>
            </footer>
    );
}

export default Footer;