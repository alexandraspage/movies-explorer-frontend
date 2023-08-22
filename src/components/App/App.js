import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
  <div className='page'>
    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="/movies" element={<Movies></Movies>}></Route>
      <Route path="/saved-movies" element={<SavedMovies></SavedMovies>}></Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
      <Route path='/signup' element={<Register></Register>}></Route>
      <Route path='/signin' element={<Login></Login>}></Route>
    </Routes>

  </div>  
  );
}

export default App;
