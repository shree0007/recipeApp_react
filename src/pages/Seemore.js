import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import './Seemore.css'


const Seemore = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [recipeDescription, setRecipeDescription] = useState([]);

    const [flag, setFlag] = useState("");
    // hello


    useEffect(() => {
        axios.get(`http://localhost:5000/recipes/`).then((data) => {
            const totalRecipes = data.data;
            const findRecipe = totalRecipes.find((recipe) => +recipe.id === +id);
            setRecipeDescription(findRecipe);
        });
    }, [id]);

    useEffect(() => {
        if (recipeDescription && recipeDescription.country) {
            axios
                .get(`https://restcountries.com/v3.1/name/${recipeDescription.country}`)
                .then((response) => {
                    setFlag(response.data[0].flags.svg);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [recipeDescription]);

    if (!recipeDescription) {
        return <div>Loading...</div>;
    }

    return (
        <div className='seemore'>
            <div className='content1'>
                <h1> {recipeDescription.name}</h1>
                <p>Author: {recipeDescription.author}</p>
                <div className='images'>
                    <img id='flag' src={flag} alt={recipeDescription.country} />
                    <img id='recipe-pic' src={recipeDescription.image} alt={recipeDescription.name} />
                </div>
                <div>
                    <h4>About this Recipe:</h4>
                    <p id='description'>{recipeDescription.description}</p>
                </div>
            </div>
            <div className='content2'>
                <div className='ingredients'>

                    <h4>Ingredients:</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>

                        {recipeDescription.ingredients && recipeDescription.ingredients.map((ingredient) => (
                            <tbody>
                                <tr>
                                    <td>{ingredient.ingredient}</td>
                                    <td>{ingredient.quantity}</td>
                                </tr>
                            </tbody>

                        ))}
                    </table>
                </div>

                <div>
                    <h4>How to prepare:</h4>
                    <p id='instructions'>{recipeDescription.instructions}</p>
                </div>

                <button onClick={() => navigate(-1)}>Back</button>

            </div>



        </div>

    );
};

export default Seemore;