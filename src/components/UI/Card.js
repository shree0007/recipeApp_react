import React, { useEffect, useState } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import axios from 'axios';





const Card = (props) => {
    const [flag, setFlag] = useState("");

    useEffect(() => {
        axios
            .get(`https://restcountries.com/v3.1/name/${props.country}`)
            .then((res) => {
                setFlag(res.data[0].flags.svg)
            })
    }, [props.country])

    return (
        <div className='recipes-card'>
            <img src={props.image} alt={props.name} />
            <img id='flag' src={flag} alt={props.country} />
            <h3>{props.name}</h3> <br></br>
            <div className='card-btn'><Link to={`/${props.id}`} >See more</Link></div>



        </div>
    );
};

export default Card;

