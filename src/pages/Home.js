import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/Herobanner';
import './Home.css';


const Home = () => {
    return (
        <div className='home'>
            <HeroBanner />
            <h2>Looking for the recipes?</h2>
            <div className='nav-cards'>
                <div className='nav-card'>

                    <h4>Browse Recipes</h4>
                    <p>Find your favourites in this collection.You can search recipies based on name or country</p>
                    <Link to="recipes">All recipes</Link>

                </div>
                <div className='nav-card'>
                    <h4>Add Recipes</h4>
                    <p>Recipe from your country is missing? No worries, add one !</p>
                    <Link to="addrecipe">Add recipes</Link>
                </div>
                <div className='nav-card'>
                    <h4>Want to know more about our projects?</h4>
                    <p>Please visit our programme homepage for more information</p>
                    <Link to="https://en.bc.fi/">Business College Helsinki Homepage</Link>
                </div>
            </div>
        </div>
    );
};


export default Home;