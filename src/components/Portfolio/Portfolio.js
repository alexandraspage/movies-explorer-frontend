import React from 'react';

function Portfolio() {
    return (
        <section>
            <h4 className="portfolio">Портфолио</h4>
            <div className="portfolio__links">
                <p className="portfolio__page">Статичный сайт</p>
                <a className="portfolio__pointer" target="blank" href="https://github.com/alexandraspage/how-to-learn.git">&#8599;</a>
            </div>
            <div className="portfolio__links">
                <p className="portfolio__page">Адаптивный сайт</p>
                <a className="portfolio__pointer" target="blank" href="https://alexandraspage.github.io/russian-travel/">&#8599;</a>
            </div>
            <div className="portfolio__links">
                <p className="portfolio__page">Одностраничное приложение</p>
                <a className="portfolio__pointer" target="blank" href="https://mesto-practicum.nomoredomains.xyz/sign-in">&#8599;</a>
            </div>
        </section>

    )
}

export default Portfolio;