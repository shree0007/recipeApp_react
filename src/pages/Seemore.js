import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import './Seemore.css'


const Seemore = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [recipeDescription, setRecipeDescription] = useState([]);

    const [flag, setFlag] = useState("");





    useEffect(() => {

        axios
            .get(`http://localhost:5000/recipes/`)
            .then((response) => {
                const totalRecipes = (response.data);
                const findRecipe = totalRecipes.find((recipe) => +recipe.id === +id);
                setRecipeDescription(findRecipe)
                // console.log(totalRecipes);


                axios
                    .get(`https://restcountries.com/v3.1/name/${recipeDescription.country}`)
                    .then((response) => {
                        setFlag(response.data[0].flags.svg)
                    })
                    .catch((error) => {
                        console.log('error');
                    });

            })

    }, [id, recipeDescription.country]);


    return (
        <div className='seemore'>
            <div className='content1'>
                <h1> {recipeDescription.name}</h1>
                <p>Invented by: {recipeDescription.author}</p>
                <img src={flag} alt={recipeDescription.country} />
                <img src={recipeDescription.flag} alt={recipeDescription.country} />
                <img src={recipeDescription.image} alt={recipeDescription.name} />
                <div>
                    <h4>About this Recipe:</h4>
                    <p>{recipeDescription.description}</p>
                </div>
            </div>
            <div className='content2'>
                <div className='ingredients'>
                    <h4>Ingredients:</h4>
                    {recipeDescription.ingredients && recipeDescription.ingredients.map((ingredient) => (
                        <li>{ingredient.ingredient} - {ingredient.quantity}</li>
                    ))}
                </div>

                <div>
                    <h4>How to prepare:</h4>
                    <p>{recipeDescription.instructions}</p>
                </div>

                <button onClick={() => navigate(-1)}>Back</button>

            </div>



        </div>

    );
};

export default Seemore;