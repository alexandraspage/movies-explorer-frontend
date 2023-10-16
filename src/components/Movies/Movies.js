import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
    return (
        <>
            <Header page="movies"></Header>
            <main className='page-size'>
                <SearchForm></SearchForm>
                <MoviesCardList></MoviesCardList>
            </main>
            <Footer></Footer>
        </>

    )
}

export default Movies;