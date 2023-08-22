import React from "react";
import pic from '../../images/pic__COLOR_landing-logo.svg';

function Promo(){
    return (
        <div className="promo">
            <div className="promo__cover">
                <img className="promo__image" src={pic} alt='фоновая картинка'/>
                <h1 className="promo__name">Учебный проект студентки факультета Веб-разработки.</h1>
            </div>
        </div>
    )
}

export default Promo;