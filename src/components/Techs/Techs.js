import React from "react";

function Techs(){
    return(
        <div className="techs" id="techs">
            <h2 className="main-title">Технологии</h2>
            <h3 className="techs__header">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__list">
                <li className="techs__point">HTML</li>
                <li className="techs__point">CSS</li>
                <li className="techs__point">JS</li>
                <li className="techs__point">React</li>
                <li className="techs__point">Git</li>
                <li className="techs__point">Express.js</li>
                <li className="techs__point">mongoDB</li>
            </ul>

        </div>

    )
}

export default Techs;