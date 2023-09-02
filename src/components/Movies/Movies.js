import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import useResize from '../../utils/useResize';

function Movies({ movies, onSearch, isLoading, error, onCardSave, savedMovies }) {

    const [foundMovies, setFoundMovies] = useState([]);
  const [isMovies, setIsMovies] = useState(false);
    const [isFilterOn, setFilterOn] = useState();
    const [searchError, setSearchError] = useState(false)

    const size = useResize();
    console.log(movies)
    // console.log(foundMovies)

    useEffect(() => {
        searchResult()
    }, [movies, isFilterOn]);

    useEffect(() => {
        if (localStorage.getItem('foundMovies')) {
            setFoundMovies(JSON.parse(localStorage.getItem('foundMovies')));

        }
    }, []);

    function handleSearch() {
        setSearchError(false)
        if (movies.length > 0) {
            searchResult();
            console.log('ok')
            console.log(isMovies)
        } else {
            setIsMovies(true)
            console.log('api')
            onSearch();
        //    searchResult();
        }
    }

    function handleFilter(value) {
        setFilterOn(value)
        // localStorage.removeItem('checkbox');
      /*  if (value === true) {

            const shortMovies = foundMovies.filter((item) => {
                return item.duration < 40;
            })
            setFoundMovies(shortMovies);
        } else {
            console.log(isFilterOn)

            searchResult();
        }
        */
    }

    function searchResult() {
        
        if (isFilterOn) {
            console.log('filter');

            const shortMovies = movies.filter((item) => {
                return item.duration < 40;
            })

            const shortMoviesResult = shortMovies.filter((item) => {
                return ( item.nameRU.toLowerCase().includes(localStorage.getItem('request')) || item.nameEN.toLowerCase().includes(localStorage.getItem('request')) )
            })
           // console.log(shortMoviesResult);
            setFoundMovies(shortMoviesResult);
            localStorage.setItem('foundMovies', JSON.stringify(shortMoviesResult));
           localStorage.setItem('checkbox', isFilterOn);

            if(shortMoviesResult.length === 0){
                setSearchError(true)
            } else {
                setSearchError(false)
            }
        }else if (isMovies) {   // выполняется всегда только если не ошибка сервера
            console.log('search')
            console.log(isMovies)
            const searchResult = movies.filter((item) => {
                return (item.nameRU.toLowerCase().includes(localStorage.getItem('request')) || item.nameEN.toLowerCase().includes(localStorage.getItem('request')))
            });


            setFoundMovies(searchResult);
            localStorage.setItem('foundMovies', JSON.stringify(searchResult))

            if (searchResult.length === 0) {
                setSearchError(true)
            } else {
                setSearchError(false)
            }

            if (localStorage.getItem('checkbox')) {
                localStorage.removeItem('checkbox');
            };

        }
    }

    function searchShort() {
        const shortMoviesResult = foundMovies.filter((item) => {
            return (item.nameRU.toLowerCase().includes(localStorage.getItem('request')) || item.nameEN.toLowerCase().includes(localStorage.getItem('request')))

        })
        setFoundMovies(shortMoviesResult);
    }

            return (
                <>
                    <Header page="movies"></Header>
                    <main className='page-size'>
                        <SearchForm onSubmit={handleSearch} shortMovies={handleFilter}></SearchForm>
                        <MoviesCardList onCardSave={onCardSave} savedMovies={savedMovies} searchError={searchError} error={error} isLoading={isLoading} foundMovies={foundMovies} movies={movies}></MoviesCardList>
                    </main>
                    <Footer></Footer>
                </>

            )
        }

export default Movies;