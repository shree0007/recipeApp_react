import React from 'react';
import { Link } from 'react-router-dom';
import './Herobanner.css';
import video from '../assets/video.mp4';



function HeroBanner() {
    return (
        <div className="hero-banner">
            <video id='video' src={video} autoPlay loop muted />
            <h1>RECIPE MASTER</h1>
            <p>Recipe master is app where you can discover tons of recipies for delicious food</p>
            <Link to="recipes"> <button id='recipes-btn-nav'>Browse Recipes</button></Link>
        </div>
    );
}

export default HeroBanner;
