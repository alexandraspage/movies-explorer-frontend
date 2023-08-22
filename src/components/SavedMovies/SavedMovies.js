import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(){
    return(
        <div className='movies'>
            <Header page="movies"></Header>
            <SearchForm></SearchForm>
            <MoviesCardList class='hidden'></MoviesCardList>
            <Footer></Footer>
        </div>

    )
}

export default SavedMovies;