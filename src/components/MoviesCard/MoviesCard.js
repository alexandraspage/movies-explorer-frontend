import React from 'react';

function MoviesCard(props){
    return(
        <div className='card'>
            <img src={props.image} className='card__image' alt='обложка фильма'/>
            <button className='card__save-button'>Сохранить</button>
            <div className='card__conteiner'>
                <h3 className='card__title'>{props.name}</h3>
                <p className='card__time'>{props.time}</p>

            </div>


        </div>

    )
}

export default MoviesCard;