import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundError from '../NotFoundError/NotFoundError';
import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import { useFormWithValidation } from '../../utils/Validation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(false)
  const [savedMovies, setSavedMovies] = useState([])
  const [isMovies, setIsMovies] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { resetForm } = useFormWithValidation();

 // console.log(movies)

  useEffect(() => {
    tokenCheck();
    getSavedMovies();
    if(localStorage.getItem('foundMovies')){
      setIsMovies(true);
    }
  }, []);

  function handleLogin({ email, password }) {
    mainApi.login({ email, password })
      .then((data) => {
        console.log('ok')
        if (data.jwt) {
          localStorage.setItem('token', data.jwt);
          setLoggedIn(true);
          setCurrentUser(data.data)
          navigate('/movies', { replace: true });
          resetForm();
        }
      })
      .catch((err) => {
        setError(err);
      })
  }

  function handleRegisterSubmit({ name, email, password }) {
    mainApi.register({ name, email, password })
      .then(() => {
        handleLogin({ email, password })
        resetForm();
        console.log('ok');
      })
      .catch((err) => {
        setError(err);
      })
  };

  function handleProfileSubmit({ name, email }) {
    console.log('ok')
    mainApi.changeUserInfo({ name, email })
      .then((data) => {
        console.log(data)
        setCurrentUser(data)

      })
      .catch((err) => {
        setError(err);
      })
  }

  function getMovies() {
    setConnectionError(false)
    setIsLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
        setIsLoading(false)
        setIsMovies(true)
      })
      .catch((err) => {
        setConnectionError(true)
        console.log(err);
        setIsLoading(false);
      })
  }

  function handleSaveCard(card) {
    const savedMovie = savedMovies.find((item) => item.movieId === card.id)
    console.log(savedMovie)
    savedMovie ? handleDeleteCard(savedMovie) :
    mainApi.saveMovie(card)
      .then((data) => {
        setSavedMovies((savedMovies) => [...savedMovies, data])
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleDeleteCard(card){
    mainApi.deleteMovie(card._id)
    .then(() => {
     // console.log(card._id)
     // setSavedMovies((savedMovies) => {
     //   savedMovies.filter((item) => item._id !== card._id)
     //   console.log(savedMovies)
     getSavedMovies()
      
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function getSavedMovies(){
    mainApi.getSavedMovies()
    .then((data) => {
      console.log('getsaved')
      setSavedMovies(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function tokenCheck() {
    const path = location.pathname;
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.getUser(token)
        .then((data) => {
          setLoggedIn(true);
          setCurrentUser(data);
          navigate(path);
        })
        .catch((err) => { console.log(err) })
    }
  }

  function signOut() {
    localStorage.removeItem('token');
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    navigate('/', { replace: true })
    setMovies([])
  }

  return (
<<<<<<< Updated upstream
  <div className='page'>
    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="/movies" element={<Movies></Movies>}></Route>
      <Route path="/saved-movies" element={<SavedMovies></SavedMovies>}></Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
      <Route path='/signup' element={<Register></Register>}></Route>
      <Route path='/signin' element={<Login></Login>}></Route>
      <Route path='*' element={<NotFoundError></NotFoundError>}></Route>
    </Routes>

  </div>  
=======
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main isLoggedIn={loggedIn}></Main>}></Route>
          <Route path="/movies" element={<ProtectedRouteElement loggedIn={loggedIn} element={Movies} isMovies={isMovies} savedMovies={savedMovies} error={connectionError} onCardSave={handleSaveCard} movies={movies} isLoading={isLoading} onSearch={getMovies} />}></Route>
          <Route path="/saved-movies" element={<ProtectedRouteElement loggedIn={loggedIn} element={SavedMovies} onCardDelete={handleDeleteCard} savedMovies={savedMovies}/>}></Route>
          <Route path='/profile' element={<ProtectedRouteElement loggedIn={loggedIn} element={Profile} signOut={signOut} handleProfileSubmit={handleProfileSubmit} />}></Route>
          <Route path='/signup' element={<Register error={error} handleRegister={handleRegisterSubmit}></Register>}></Route>
          <Route path='/signin' element={<Login error={error} handleLogin={handleLogin}></Login>}></Route>
          <Route path='*' element={<NotFoundError></NotFoundError>}></Route>
        </Routes>
      </CurrentUserContext.Provider>
    </>
>>>>>>> Stashed changes
  );
}

export default App;
