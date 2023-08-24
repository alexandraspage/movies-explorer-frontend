import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'

function Login() {
    return (
        <main className='form-section'>
            <Link to='/' replace ><img src={logo} alt='логотип' className='form__logo'></img></Link>
            <h1 className='form__title'>Рады видеть!</h1>
            <form className='form'>
                <div className='form__container'>
                    <label className='form__label'>E-mail</label>
                    <input className='form__input' id='login-email' type='email' required name='email' minLength='2' maxLength='40' placeholder='e-mail'></input>
                    <span className='form__span'></span>
                    <label className='form__label'>Пароль</label>
                    <input className='form__input' id='login-password' type='password' required name='password' minLength="2" maxLength="200" placeholder='password'></input>
                    <span className='form__span'></span>
                </div>
                <button type='submit' className='form__submit login__submit'>Войти</button>
                <p className='form__question'>Ещё не зарегистрированы?<Link to="/signup" replace className="form__link"> Регистрация</Link></p>
            </form>
        </main>

    )
}

export default Login;