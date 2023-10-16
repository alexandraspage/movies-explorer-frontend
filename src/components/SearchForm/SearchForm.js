import React from 'react';
import search from '../../images/icon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className='serach-form__container'>
            <div className='search-form'>
                <img src={search} alt='иконка поиска' className='search-form__icon'></img>
                <form className='search-form__form'>
                    <input id="movie" className="search-form__input" placeholder="Фильм"
                        type="text" name="movie" required minLength="2" maxLength="100" />
                    <div className='search-form__buttons-container'>
                        <div className='search-form__submit-container'>
                            <button className='search-form__submit' type='submit'>Найти</button>
                        </div>
                        <FilterCheckbox class='search-checkbox'></FilterCheckbox>
                    </div>
                </form>
            </div>
            <FilterCheckbox class='separeted-checkbox'></FilterCheckbox>
        </section>

    )
}
export default SearchForm;