import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <section>
            <h4 className="portfolio">Портфолио</h4>
            <a className="portfolio__links" target='blank' href='https://github.com/alexandraspage/how-to-learn.git' >
                <p className="portfolio__page">Статичный сайт</p>
                <p className="portfolio__pointer">&#8599;</p>
            </a>
            <a className="portfolio__links" target="blank" href="https://alexandraspage.github.io/russian-travel/">
                <p className="portfolio__page">Адаптивный сайт</p>
                <p className="portfolio__pointer">&#8599;</p>
            </a>
            <a className="portfolio__links" target="blank" href="https://mesto-practicum.nomoredomains.xyz/sign-in">
                <p className="portfolio__page">Одностраничное приложение</p>
                <p className="portfolio__pointer">&#8599;</p>
            </a>
        </section>

    )
}

export default Portfolio;