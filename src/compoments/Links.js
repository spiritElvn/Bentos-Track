import React from 'react';
import '../styles/index.css';

import TelegramLogo from "../pictures/icons/telegram.png";
import GithubLogo from "../pictures/icons/github.png";

const TgBotLink = "https://t.me/BeesYoung_bot",
    GithubLink = "https://github.com/Fishing-Team-Hack/azov_hack_tg";

const LinksWrapper = function () {
    return (
        <section className="section section_links padding-0-15 bg-fixed">
            <div className="section_links_wrapper wrapper flexbox justify-between">
                <a href={TgBotLink}>
                    <div className="section_links_link-wrapper section_links_telegram bg-white py-8 px-6">
                        <div className="section_links_link_logo">
                            <img className="mx-auto my-0" src={TelegramLogo} alt=""/>
                        </div>
                        <h2 className="section_links_link_title text-black font-semibold my-10 mx-auto">Telegram</h2>
                        <div className="section_links_link_clipboard-wrapper">
                            <p className="section_links_link_clipboard text-light-gray hover:text-black">{TgBotLink}</p>
                        </div>
                    </div>
                </a> <a href={GithubLink}>
                <div className="section_links_link-wrapper section_links_github bg-white py-8 px-6">
                    <div className="section_links_link_logo">
                        <img className="mx-auto my-0" src={GithubLogo} alt=""/>
                    </div>
                    <h2 className="section_links_link_title text-black font-semibold my-10 mx-auto">Github</h2>
                    <div className="section_links_link_clipboard-wrapper">
                        <p className="section_links_link_clipboard text-light-gray hover:text-black">{GithubLink}</p>
                    </div>
                </div>
            </a>
            </div>
        </section>
    )
}

export default LinksWrapper;