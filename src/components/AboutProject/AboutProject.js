import React from "react";

function AboutProject(){
    return(
        <div className="about-project" id="aboutproject">
            <h2 className="about-project__header main-title">О проекте</h2>
            <div className="about-project__grid-first">
                <h4 className="grid-first__header grid-first__header-parts">Дипломный проект включал 5 этапов</h4>
                <h4 className="grid-first__header grid-first__header-weeks">На выполнение диплома ушло 5 недель</h4>
                <p className="grid-first__point">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className="grid-first__point">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="about-project__grid-second">
                <p className="grid-second__point_first-column">1 неделя</p>
                <p className="grid-second__point_second-column">4 недели</p>
                <p className="grid-second__point">Back-end</p>
                <p className="grid-second__point">Front-end</p>
            </div>

        </div>

    )
}

export default AboutProject;