import React from 'react';
import '../styles/index.css';

const TroubleWrapper = function () {
    return (<section className="section section_trouble padding-0-6 bg-fixed">
        <div className="section_trouble_wrapper wrapper">
            <div className="section_trouble_flexbox flexbox justify-between">
                <h2 className="section_trouble_title font-semibold">Основная проблема
                </h2>
                <p className={"section_trouble_description font-black text-right"}>Бентос – это сообщество организмов, которые
                    обитают на дне водоемов, играя важную роль в экосистеме и подвергаясь различным угрозам, что делает
                    изучение и охрану бентоса необходимыми для сохранения окружающей среды.
                    Обработка проб бентоса (обитателей морского дна) может достигать значительного времени — даже больше
                    недели (на одну пробу) — часть из которого затрачивается на определение видовой принадлежности
                    организмов. Идентификация, в свою очередь, может быть осложнена и замедлена из-за большого
                    количества организмов в пробе (или большого количества повторностей одной пробы). В одной пробе их
                    может быть больше ста.
                </p>
            </div>
        </div>
    </section>)
}

export default TroubleWrapper;