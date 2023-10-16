import React from "react";
import photo from '../../images/1 (61 of 93).jpg'
import Portfolio from "../Portfolio/Portfolio";

function AboutMe(){
    return(
        <section className="aboutme" id="aboutme">
            <h2 className="main-title">Студент</h2>
            <div className="aboutme__container">
                 <div className="aboutme__info">
                    <h3 className="aboutme__info_name">Александра</h3>
                    <p className="aboutme__info_job">Фронтенд-разработчик, 24 года</p>
                    <p className="aboutme__info_about">По первому высшему образованию я филолог, а сейчас работаю фотографом. Решила, что это всё несерьезно, попробовала программирование и понравилось. Собираюсь дальше улучшать свои навыки и после окончания курса искать работу.</p>
                    <a href="https://github.com/alexandraspage" target="blank" className="aboutme__github">Github</a>
                </div>
                <img className="aboutme__img" src={photo} alt='фото студента'/>
            </div>
           <Portfolio></Portfolio>
        </section>
    )
}

export default AboutMe;