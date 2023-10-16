import React from 'react';

function FilterCheckbox(props){
    return(
    <section className={`${props.class}`}>
        <input className="invisible-checkbox" type="checkbox" name="short-movie" id="short-movie" value="short-movie"></input>
        <span className="visible-checkbox"></span>
        <span className="checkbox-text">Короткометражки</span>
    </section>
    )
}

export default FilterCheckbox;