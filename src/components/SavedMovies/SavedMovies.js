import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

<<<<<<< Updated upstream
function SavedMovies(){
    return(
        <div className='movies'>
            <Header page="movies"></Header>
            <SearchForm></SearchForm>
            <MoviesCardList class='hidden'></MoviesCardList>
=======
function SavedMovies({ savedMovies, onCardDelete }) {

    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const [searchError, setSearchError] = useState('');
    const [isFilterOn, setFilterOn] = useState();

console.log(isSearched)

    function handleSubmit(value) {
        
        if(isFilterOn){
           console.log(filteredMovies)
            const shortSavedFilteredMovies = filteredMovies.filter((item) => {
                return ( item.nameRu.toLowerCase().includes(value) || item.nameEn.toLowerCase().includes(value));
            })

            setFilteredMovies(shortSavedFilteredMovies);

            if(shortSavedFilteredMovies.length === 0){
                setSearchError(true)
               }else{
                setSearchError(false)
               }
        }else {

        const filteredSavedMovies = savedMovies.filter((item) => {
            return (item.nameRu.toLowerCase().includes(value) || item.nameEn.toLowerCase().includes(value))
        })
       setIsSearched(true)

       setFilteredMovies(filteredSavedMovies);

       if(filteredSavedMovies.length === 0){
        setSearchError(true)
       }else{
        setSearchError(false)
       }
    }
      //  setFilteredMovies(filteredSavedMovies);
    }

    function shortSavedMoviesSearch(value){
        setSearchError(false)
        setFilterOn(value);
        if(value === true){
            const shortSavedMovies = savedMovies.filter((item) => {
                return item.duration < 40
            })
            setIsSearched(true);
            setFilteredMovies(shortSavedMovies);
            console.log(shortSavedMovies)
        }else{
            setFilteredMovies(savedMovies)
            setIsSearched(false);
        }
        
    }



    return (
        <>
            <Header page="movies"></Header>
            <main className='page-size'>
                <SearchForm onSavedMoviesSubmit={handleSubmit} shortSavedMoviesSearch={shortSavedMoviesSearch}></SearchForm>
                <MoviesCardList savedMovies={
                    isSearched ? filteredMovies :
                    savedMovies} searchError={searchError} onCardDelete={onCardDelete}></MoviesCardList>
            </main>
>>>>>>> Stashed changes
            <Footer></Footer>
        </div>

    )
}

export default SavedMovies;