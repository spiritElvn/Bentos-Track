import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import Navbar from "./compoments/Navbar";
import Header from "./compoments/Header";
import StatisticWrapper from "./compoments/Statistic";
import IdentificationWrapper from "./compoments/Identification";
import LinksWrapper from "./compoments/Links";
import FooterWrapper from "./compoments/Footer";

const Doc = function () {
    return (
        <div>
            <Navbar/>
            <main>
                <Header/>
                <div className="identification-statistics-wrapper bg-fixed bg-cover bg-no-repeat">
                    <IdentificationWrapper/>
                    <StatisticWrapper/>
                </div>
                <LinksWrapper/>
            </main>
            <footer className="footer bg-black padding-0-6">
                <FooterWrapper/>
            </footer>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Doc/>
        <App/>
    </React.StrictMode>
);