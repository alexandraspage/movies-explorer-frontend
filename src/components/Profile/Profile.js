import React from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import { useFormWithValidation } from '../../utils/Validation';

function Profile(props) {

    const user = useContext(CurrentUserContext);
    const { values, handleChange, errors, isValid } = useFormWithValidation();
console.log(isValid)
    function handleSubmit(e) {
        e.preventDefault();
        console.log('ok')

        props.handleProfileSubmit(values);
    }

    return (
        <>
            <Header page="movies page-size"></Header>
            <main className='page-size'>
                <section className='profile'>
                    <h1 className='profile__hello'>Привет, {user.name}</h1>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='profile__info'>
                            <div className='profile__name'>
                                <p className='profile__input-label'>Имя</p>
                                <input className={`profile__input ${!isValid && 'form__input_type_error'}`} onChange={handleChange} id="profile-name" placeholder={user.name} type="name" name="name" minLength="2" maxLength="100" pattern='[A-Za-zА-Яа-яЁё\-\s]+$'></input>
                            </div>
                            <span className={`form__span ${!isValid && 'form__span_type_visible'}`}>{JSON.stringify(errors.name) ?? ''}</span>
                            <div className='profile__email'>
                                <p className='profile__input-label'>E-mail</p>
                                <input className={`profile__input ${!isValid && 'form__input_type_error'}`} onChange={handleChange} id="profile-email" pattern='\S+@\S+\.\S+' placeholder={user.email} type="email" name="email" minLength="2" maxLength="100"></input>
                            </div>
                            <span className={`form__span ${!isValid && 'form__span_type_visible'}`}>{JSON.stringify(errors.email) ?? ''}</span>
                        </div>
                        <button disabled={!isValid}  type='submit' className={`profile__change-button ${!isValid && 'profile__form_type_notvalid'}`}>Редактировать</button>
                    </form>
                    <button onClick={props.signOut} className='profile__exit'>Выйти из аккаунта</button>
                </section>
            </main>
        </>

    )
}

export default Profile;