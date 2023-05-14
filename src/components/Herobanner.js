import React from 'react';
import { Link } from 'react-router-dom';
import './Herobanner.css';


function HeroBanner() {
    return (
        <div className="hero-banner">
            <h1>RECIPE MASTER</h1>
            <p>Recipe master is app where you can discover tons of recipies for delicious food</p>
            <Link to="recipes"> <button>Browse Recipes</button></Link>
        </div>
    );
}

export default HeroBanner;
