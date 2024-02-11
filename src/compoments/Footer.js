import React from 'react';
import '../styles/index.css';

const TgTLAcc = "https://t.me/BeesKnights";

const FooterWrapper = function(){
    return (
        <div className="footer_wrapper wrapper">
            <p className={"footer_madeBy"}>Сайт сделан <a className="footer_madeBy_link hover:text-skyblue" href={TgTLAcc}>Fishing Team</a></p>
        </div>
    )
}

export default FooterWrapper;