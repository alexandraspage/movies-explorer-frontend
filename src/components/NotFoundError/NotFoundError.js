import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundError() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }
    return (
        <main className='page-size'>
            <section className='error'>
                <div className='error__name'>
                    <h1 className='error__number'>404</h1>
                    <p className='error__note'>Страница не найдена</p>
                </div>
                <button className='error__back' onClick={goBack}>Назад</button>
            </section>
        </main>
    )
}

export default NotFoundError;