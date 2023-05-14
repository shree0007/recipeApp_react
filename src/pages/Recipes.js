import React, { useState, useEffect } from 'react';
import './Recipes.css';
import axios from 'axios';
import Card from '../components/UI/Card';




const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [searchInput, setSearchInput] = useState('');


    useEffect(() => {

        axios
            .get(`http://localhost:5000/recipes`)
            .then((response) => {
                setRecipes(response.data);
                console.log(response.data);

            })
            .catch((err) => alert("Server error"));
    }, []);


    const searchInputHandler = (event) => {
        setSearchInput(event.target.value.toLowerCase().trim())
    }

    const searchFilter = recipes.filter(recipe => {
        return recipe.name.includes(searchInput)
    })

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
                        flag={recipe.country.flag}


                    />

                )}
            </div>

        </div>
    );
};

export default Recipes;


