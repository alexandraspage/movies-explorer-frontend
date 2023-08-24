import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <>
            <Header page="movies page-size"></Header>
            <main className='page-size'>
                <section className='profile'>
                    <h1 className='profile__hello'>Привет, Александра</h1>
                    <form className='profile__info'>
                        <div className='profile__name'>
                            <p className='profile__input-label'>Имя</p>
                            <input className='profile__input' id="profile-name" placeholder='Александра' type="text" name="profile-name" minLength="2" maxLength="100"></input>
                        </div>
                        <div className='profile__email'>
                            <p className='profile__input-label'>E-mail</p>
                            <input className='profile__input' id="profile-email" placeholder='pochta@yandex.ru' type="text" name="profile-email" minLength="2" maxLength="100"></input>
                        </div>
                    </form>
                    <button type='submit' className='profile__change-button'>Редактировать</button>
                    <Link to='/' replace className='profile__exit'>Выйти из аккаунта</Link>
                </section>
            </main>
        </>

    )
}

export default Profile;