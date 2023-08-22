import React from 'react';

function NotFoundError(){
    return(
        <section className='error'>
            <div className='error__name'>
                <h1 className='error__number'>404</h1>
                <p className='error__note'>Страница не найдена</p>
            </div>
            <button className='error__back'>Назад</button>
        </section>
    )
}

 export default NotFoundError;