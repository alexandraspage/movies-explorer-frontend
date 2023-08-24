import React from "react";
import pic from '../../images/pic__COLOR_landing-logo.svg';

function Promo(){
    return (
        <section className="promo">
            <div className="promo__cover">
                <img className="promo__image" src={pic} alt='фоновая картинка'/>
                <h1 className="promo__name">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </section>
    )
}

export default Promo;