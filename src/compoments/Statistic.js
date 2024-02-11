import React from "react";
import '../styles/index.css';

import TrainboxLoss from "../pictures/statistick/trainbox-loss.png";
import TrainclsLoss from "../pictures/statistick/traincls-loss.png";
import TraindfiLoss from "../pictures/statistick/traindfi-loss.png";

const StatisticWrapper = function () {
    return (<section className="section section_statisticks padding-0-6 bg-fixed">
            <div className="section_statistick_wrapper wrapper">
                <div className="flex justify-between">
                    <h2 className={"section_statisticks_title font-semibold mb-8"}>Статистика работы нейросети</h2>
                    <p className={"section_statisticks_description text-right"}>Нейросеть написана при помощи Yolo
                        v.8. <br/>
                        Обучение производилось на собственном датасете, не имеющем аналогов по объёму, <br/>
                        что является большим вкладом в развитии данного направления.</p>
                </div>
                <div className="jjj flex justify-between">
                    <div>
                        <img src={TrainboxLoss} alt=""/>
                    </div>
                    <div>
                        <img src={TrainclsLoss} alt=""/>

                    </div>
                    <div>
                        <img src={TraindfiLoss} alt=""/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatisticWrapper;