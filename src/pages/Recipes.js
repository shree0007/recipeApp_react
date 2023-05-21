import React, { useState, useEffect } from 'react';
import './Recipes.css';
import axios from 'axios';
import Card from '../components/UI/Card';




const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchInput, setSearchInput] = useState('');


    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`http://localhost:5000/recipes`)
            .then((response) => {
                setRecipes(response.data);
                setIsLoading(false);

            })
            .catch((err) => alert("Server error"));
    }, []);


    const searchInputHandler = (event) => {
        setSearchInput(event.target.value.toLowerCase().trim())
    }

    const searchFilter = recipes.filter(recipe => {
        return recipe.name.includes(searchInput)
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className='recipes'>

            <h3>Search for recipe:</h3>
            <input type={'search'} onChange={searchInputHandler}></input>

            <div className='cards'>
                {searchFilter.map((recipe) =>

                    <Card
                        id={recipe.id}
                        name={recipe.name}
                        image={recipe.image}
                        country={recipe.country}


                    />

                )}
            </div>

        </div>
    );
};

export default Recipes;


