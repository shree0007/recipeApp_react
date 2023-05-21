import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/Herobanner';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <HeroBanner />
            <h2>Seeking culinary inspiration?</h2>
            <div className='nav-cards'>
                <div className='nav-card'>
                    <h4>Browse Recipes</h4>
                    <p>Explore and uncover your preferred choices within this collection. You have the opportunity to search for recipes by name or country of origin.</p>
                    <Link to="recipes">All recipes</Link>
                </div>

                <div className='nav-card'>
                    <h4>Add Recipes</h4>
                    <p>Is a recipe from your country not included? No need to worry, you can contribute and add one!</p>
                    <Link to="addrecipe">Add recipes</Link>
                </div>

                <div className='nav-card'>
                    <h4>Want to know more about our projects?</h4>
                    <p>For further details, kindly visit the homepage of our program.</p>
                    <Link to="https://en.bc.fi/">Business College Helsinki Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;