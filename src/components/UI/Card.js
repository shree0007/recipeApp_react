import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';




const card = (props) => {


    return (
        <div className='recipes-card'>
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3> <br></br>
            <div className='card-btn'><Link to={`/${props.id}`} >See more</Link></div>
            <p>{props.country}</p>
            {/* <img src={countries[props.country]?.flag} alt={`${props.country} flag`} /> */}



        </div>
    );
};

export default card;

