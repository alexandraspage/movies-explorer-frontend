import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import config from '../../utils/config';

function MoviesCardList(props){
    return(
        <section className='movies-container'>
            <div className='movies-list'>
            {config.map((card) => {
                return (
                <MoviesCard key={card.name} name={card.name} image={card.image} time={card.time}></MoviesCard>
                )
            })}
            </div>
            <button className={`movies-list__button ${props.class}`} type='submit'>Ещё</button>
        </section>
    )
}

export default MoviesCardList;