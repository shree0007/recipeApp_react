import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    const [flag, setFlag] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`https://restcountries.com/v3.1/name/${props.country}`)
            .then((res) => {
                setFlag(res.data[0].flags.svg)
                setIsLoading(false)
            })
    }, [props.country])

    if (isLoading) {
        return <p>Loading...</p>;
    }

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

