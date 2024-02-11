import React from 'react';
import '../styles/index.css';
import Logo from "../pictures/icons/logo.svg";

const FileLink = "http://127.0.0.1:5000/photos/download",
    TgLink= "https://t.me/BeesKnights";

const navClasses = "navbar wrapper bg-black/[0.6] text-black fixed top-0",
    navLinksLinkClasses = "navbar_links_link hover:text-light-gray transition delay-1000";
const Navbar = function(){
    return (
        <div className={navClasses}>
            <div className="navbar_wrapper margin-0-6">
                <div className="flexbox justify-between">
                    <div className="navbar_logo flexbox justify-between align-center">
                        <img className={"navbar_logo_icon"} src={Logo} alt="fishing team"/>
                        <h6 className={"navbar_logo_title"}>Fishing Team</h6>
                    </div>
                    <div className="navbar_links flexbox align-center">
                        <a className={navLinksLinkClasses} href="#">О проблеме</a>
                        <a className={navLinksLinkClasses} href={FileLink}>Для специалистов</a>
                        <a className={navLinksLinkClasses} href="#">Карта</a>
                        <a className={navLinksLinkClasses} href={TgLink}>Обратная связь</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;