import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'
import { useFormWithValidation } from '../../utils/Validation';

function Register(props) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();

        props.handleRegister(values);
    }

<<<<<<< Updated upstream
function Register(){
    return(
        <section className='form-section'>
            <Link to='/' replace ><img src={logo} alt='логотип' className='form__logo'></img></Link>
            <h1 className='form__title'>Добро пожаловать!</h1>
            <form className='form'>
                <div className='form__container'>
                    <label className='form__label'>Имя</label>
                    <input className='form__input' id='register-name' type='text' required name='name' minLength="2" maxLength="40"></input>
                    <span className='form__span'></span>
                    <label className='form__label'>E-mail</label>
                    <input className='form__input' id='register-email' type='email' required name='email' minLength='2' maxLength='40'></input>
                    <span className='form__span'></span>
                    <label className='form__label'>Пароль</label>
                    <input className='form__input' id='register-password' type='password' required name='password' minLength="2" maxLength="200" ></input>
                    <span className='form__span'>Что-то пошло не так...</span>
                </div>
                <button type='submit' className='form__submit'>Зарегистрироваться</button>
                <p className='form__question'>Уже зарегистрированы?<Link to="/signin" replace className="form__link"> Войти</Link></p>

            </form>

        </section>

=======
    return (
        <main className='page-size'>
            <section className='form-section'>
                <Link to='/' replace ><img src={logo} alt='логотип' className='form__logo'></img></Link>
                <h1 className='form__title'>Добро пожаловать!</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form__container'>
                        <label className='form__label'>Имя</label>
                        <input className={`form__input ${!isValid && 'form__input_type_error'}`} onChange={handleChange} id='register-name' type='name' required name='name' minLength="2" maxLength="40" placeholder='имя'></input>
                        <span className={`form__span ${!isValid && 'form__span_type_visible'}`}>{JSON.stringify(errors.name) ?? ''}</span>
                        <label className='form__label'>E-mail</label>
                        <input className={`form__input ${!isValid && 'form__input_type_error'}`} onChange={handleChange} id='register-email' type='email' pattern='\S+@\S+\.\S+' required name='email' minLength='2' maxLength='40' placeholder='e-mail'></input>
                        <span className={`form__span ${!isValid && 'form__span_type_visible'}`}>{JSON.stringify(errors.email) ?? ''}</span>
                        <label className='form__label'>Пароль</label>
                        <input className={`form__input ${!isValid && 'form__input_type_error'}`} onChange={handleChange} id='register-password' type='password' required name='password' minLength="2" maxLength="200" placeholder='password'></input>
                        <span className={`form__span ${!isValid && 'form__span_type_visible'}`}>{JSON.stringify(errors.password) ?? ''}</span>
                    </div>
                    <span className='form__error'>{props.error ?? ''}</span>
                    <button type='submit' disabled={!isValid} className={`form__submit ${isValid ? '' : 'form_notvalid'}`}>Зарегистрироваться</button>
                    <p className='form__question'>Уже зарегистрированы?<Link to="/signin" replace className="form__link"> Войти</Link></p>
                </form>
            </section>
        </main>
>>>>>>> Stashed changes
    )
}

export default Register;