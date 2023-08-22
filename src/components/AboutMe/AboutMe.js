import React from "react";
import photo from '../../images/1 (61 of 93).jpg'
import Portfolio from "../Portfolio/Portfolio";

function AboutMe(){
    return(
        <div className="aboutme" id="aboutme">
            <h2 className="main-title">Студент</h2>
            <img className="aboutme__img" src={photo} alt='фото студента'/>
            <div className="aboutme__container">
                <h3 className="aboutme__header">Александра</h3>
                <p className="aboutme__subtitle">Фронтенд-разработчик, 24 года</p>
                <p className="aboutme__paragraph">По первому высшему образованию я филолог, а сейчас работаю фотографом. Решила, что это всё несерьезно, попробовала программирование и понравилось. Собирасю дальше улучшать свои навыки и после окончания курса искать работу.</p>
            </div>
            <a href="https://github.com/alexandraspage" target="blank" className="aboutme__github">Github</a>
           <Portfolio></Portfolio>

        </div>
            

    )
}

export default AboutMe;