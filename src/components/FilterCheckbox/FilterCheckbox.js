import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function FilterCheckbox(props){

   const location = useLocation();

    const chbox = document.getElementById('short-movie')

    useEffect(() => {
        if(location.pathname === '/movies' && localStorage.getItem('checkbox')){
            document.getElementById('short-movie').checked = true;
        } else{
            
            document.getElementById('short-movie').checked = false;
        }
    }, []);

    function onFilter(){
        console.log('filtr')
        
        if(chbox.checked){
            return props.shortMovies(true)
        }else{
            return props.shortMovies(false)
        }
    }

    return(
    <section className={`${props.class}`}>
        <input className="invisible-checkbox" onChange={onFilter} type="checkbox" name="short-movie" id="short-movie" value="short-movie"></input>
        <span className="visible-checkbox"></span>
        <span className="checkbox-text">Короткометражки</span>
    </section>
    )
}

export default FilterCheckbox;