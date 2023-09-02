import React from 'react';
import search from '../../images/icon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useResize from '../../utils/useResize';

function SearchForm({ onSubmit, shortMovies, onSavedMoviesSubmit, shortSavedMoviesSearch }) {

    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const size = useResize();
    const location = useLocation();
    const input = document.getElementById('movie');

    useEffect(() => {
        setError('')
    }, [value])

    useEffect(() => {
        inputValue()
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        if (input.value === '') {
            setError('Нужно ввести ключевое слово')
        } else {
            localStorage.setItem('request', document.getElementById('movie').value.toLowerCase())
            setError('')
            onSubmit(value.toLowerCase());
        };
    }

    function handleSavedSubmit(e) {
        e.preventDefault();

        if (input.value === '') {
            setError('Нужно ввести ключевое слово')
        } else {
            setError('')
            onSavedMoviesSubmit(input.value.toLowerCase());
            localStorage.setItem('request', document.getElementById('movie').value.toLowerCase());
        };
    }

    function shortMoviesSearch(value) {
        //  setFilterOn(true)
        if (location.pathname === '/movies') {
            shortMovies(value)
        } else {
            shortSavedMoviesSearch(value)
        }
    }

    function inputValue() {

        if (location.pathname === '/movies' && localStorage.getItem('request')) {

            document.getElementById('movie').value = localStorage.getItem('request');

        }
    }
    return (
        <section className='serach-form__container'>
            <div className='search-form'>
                <img src={search} alt='иконка поиска' className='search-form__icon'></img>
                <form className='search-form__form' onSubmit={
                    location.pathname === '/movies' ?
                        handleSubmit :
                        handleSavedSubmit}>
                    <input onChange={(e) => setValue(e.target.value)} id="movie" className="search-form__input" placeholder="Фильм"
                        type="text" name="movie" />
                    <div className='search-form__buttons-container'>
                        <div className='search-form__submit-container'>
                            <button className='search-form__submit' type='submit'>Найти</button>
                        </div>
                        {size > 630 ? 
                        <FilterCheckbox shortMovies={shortMoviesSearch} class='search-checkbox'></FilterCheckbox>
                        : ''}
                    </div>
                </form>
            </div>
            <span className='search-form__span'>{error ?? ''}</span>
            {size <= 630 ?
            <FilterCheckbox shortMovies={shortMoviesSearch} class='separeted-checkbox'></FilterCheckbox>
           : '' }
        </section>

    )
}
export default SearchForm;