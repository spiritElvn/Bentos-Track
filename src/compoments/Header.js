import React from 'react';
import '../styles/index.css';

const WikiLink = "https://ru.wikipedia.org/wiki/Бентос";

const sectionHeaderButton = "section_header_button mt-12 bg-skyblue hover:bg-darkSkyblue hover:text-medium-gray font-semibold";

const Header = function () {
    return (
        <section className="section section_header padding-0-6 bg-fixed">
            <div className="section_header_wrapper wrapper">
                <h1 className="section_header_title font-bold">Bentos tracker</h1>
                <h4 className={"section_header_description"}>Отслеживание Бентоса в Азовском море</h4>
                <a href={WikiLink}>
                    <button className={sectionHeaderButton}>Узнать больше</button>
                </a>
            </div>
        </section>)
}

export default Header;