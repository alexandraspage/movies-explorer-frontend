import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function FilterCheckbox(props) {

    const location = useLocation();

    //  const chbox = document.getElementById('short-movie')

    useEffect(() => {
        if (location.pathname === '/movies' && localStorage.getItem('checkbox', 'true')) {
            document.getElementById('short-movie').checked = true;
            console.log('ola')
        } else {

            document.getElementById('short-movie').checked = false;
        }
    }, []);

    function onFilter(value) {
  if(location.pathname === '/movies'){
        localStorage.setItem('checkbox', value)   
        return props.shortMovies(value);
  }else {
    return props.shortMovies(value);
  }

    }

    return (
        <section className={`${props.class}`}>
            <input className="invisible-checkbox" onChange={(e) => onFilter(e.target.checked)} type="checkbox" name="short-movie" id="short-movie"></input>
            <span className="visible-checkbox"></span>
            <span className="checkbox-text">Короткометражки</span>
        </section>
    )
}

export default FilterCheckbox;