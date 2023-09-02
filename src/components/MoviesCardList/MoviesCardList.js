import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import useResize from '../../utils/useResize';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ foundMovies, isLoading, button, error, searchError, onCardSave, savedMovies, onCardDelete }) {
  //  console.log(foundMovies);

    const size = useResize();
    const location = useLocation();

    const [moviesStart, setMoviesStart] = useState(0);
    const [moviesShow, setMoviesShow] = useState(0);
    const [moreMoviesShow, setMoreMoviesShow] = useState(0);

    let bigSizeCount = 12;
    let mediumSizeCount = 6;
    let smallSizeCount = 5;

    useEffect(() => {
        handleMoviesShow()
    }, [size])

    function addCards() {
        console.log(moviesShow)
        setMoviesShow(moviesShow + moreMoviesShow);
    }

    function handleMoviesShow() {
        console.log(size)

        if (size > 1200) {

            /*    bigSizeCount += 3;
                let array = Array.from(document.querySelector('.movies-list').children);
                let visItems = array.slice(12, bigSizeCount);
                console.log(visItems);
                console.log(bigSizeCount)
                visItems.forEach(el => el.classList.add('is-visible'));
    
                if (visItems.length + 12 === foundMovies.length) {
                    document.querySelector('.movies-list__button').classList.remove('movies-list__button_active');
                }
                */
            setMoviesStart(12)
            setMoviesShow(12)
            setMoreMoviesShow(3)

        } else if (size > 650 && size <= 1200) {

            /*   mediumSizeCount += 2;
               let array = Array.from(document.querySelector('.movies-list').children);
               let visItems = array.slice(6, mediumSizeCount);
               console.log(visItems);
               visItems.forEach(el => el.classList.add('is-visible'));
   
               if (visItems.length + 6 === foundMovies.length) {
                   document.querySelector('.movies-list__button').classList.remove('movies-list__button_active');
               }
               */
            setMoviesStart(8)
            setMoviesShow(8)
            setMoreMoviesShow(2)
        } else if (size <= 650) {
            /*
                        smallSizeCount += 1;
                        let array = Array.from(document.querySelector('.movies-list').children);
                        let visItems = array.slice(5, smallSizeCount);
                        console.log(visItems);
                        visItems.forEach(el => el.classList.add('is-visible'));
            
                        if (visItems.length + 5 === foundMovies.length) {
                            document.querySelector('.movies-list__button').classList.remove('movies-list__button_active');
                        }
                        */
            setMoviesStart(5)
            setMoviesShow(5)
            setMoreMoviesShow(2)
        }
    }


    function isMovieSaved(card, savedMovies) {
        return savedMovies.find((item) => {
            return item.movieId === (card.id || card.movieId)
        })
    }

    return (
        <section className='movies-container'>
            {isLoading ?
                <Preloader></Preloader>
                : ''}
            {error ? <span className='movies-container__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span> : ''}
            {searchError ? <span className='movies-container__error'>Ничего не найдено</span> : ''}
            <div className='movies-list'>
                {location.pathname === '/movies' && foundMovies.length > 0 && !isLoading && !error ?
                    foundMovies.slice(0, moviesShow).map((card) => {
                        return (
                            <MoviesCard isSaved={isMovieSaved(card, savedMovies)} onCardSave={onCardSave} key={card.id} card={card}></MoviesCard>
                        )
                    })
                    : ''
                }
                {location.pathname === '/saved-movies' ?
                    savedMovies.map((card) => {
                        return (
                            <MoviesCard isSaved={isMovieSaved(card, savedMovies)} onCardDelete={onCardDelete} key={card._id} card={card}></MoviesCard>
                        )
                    })
                    : ''
                }
            </div>
            {location.pathname === '/movies' && foundMovies.length > moviesShow ?
            <button onClick={addCards} className='movies-list__button' type='submit'>Ещё</button>
            : ''
        }
        </section>
    )
}

export default MoviesCardList;