import React from 'react';
import { countries } from 'countries-list';
import { useState } from 'react';
import axios from 'axios';
import cloneDeep from "lodash/cloneDeep";
import { NavLink } from "react-router-dom";
import './Addrecipe.css';

const initialRecipe = {
    id: null,
    name: "",
    author: "",
    country: "",
    description: "",
    image: "",
    ingredients: [
        {
            ingredient: "",
            quantity: "",
        },
    ],
    instructions: "",
};

const Addrecipe = () => {

    const [postRecipe, setPostRecipe] = useState(false);
    const [id, setId] = useState();
    const [recipe, setRecipe] = useState(cloneDeep(initialRecipe));
    const [clickAddIngredient, setClickAddIngredient] = useState(false);
    const [ingredients, setIngredients] = useState([{ quantity: "", ingredient: "" }]);
    const countryOptions = Object.values(countries).map(country => ({ name: country.name, code: country.alpha2 }));

    const handleAddIngredient = (event) => {
        event.preventDefault();
        setIngredients([...ingredients, { quantity: "", ingredient: "" }]);
        setClickAddIngredient(true);
    };

    const handleRemoveIngredient = (event, i) => {
        event.preventDefault();
        if (!clickAddIngredient) return;
        const newIngredients = [...ingredients];
        if (ingredients.length <= 1) return;
        newIngredients.splice(i, 1);
        setIngredients(newIngredients);

    };

    const handleIngredientChange = (i, event) => {
        const newIngredients = [...ingredients];
        newIngredients[i][event.target.name] = event.target.value;
        setIngredients(newIngredients);
    };

    const changeHandler = (event) => {
        setRecipe({ ...recipe, [event.target.name]: event.target.value });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const updatedRecipe = {
            ...recipe,
            ingredients: ingredients.map((ingredient) => ({
                ingredient: ingredient.ingredient,
                quantity: ingredient.quantity
            }))
        };

        setPostRecipe(true);
        axios
            .post("http://localhost:5000/recipes", updatedRecipe)
            .then((response) => {
                setId(response.data.id);
            })
            .catch((err) => {
                alert("Server error");
            });
    };

    return (
        <div className='form'>
            {!postRecipe && (
                <div>

                    <h2>Add new recipe</h2>
                    <form onSubmit={(event) => submitHandler(event)}>

                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name='name' required onChange={(event) => changeHandler(event)} />

                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" name='author' onChange={(event) => changeHandler(event)} />

                        <label htmlFor="country">Country</label>

                        <select name="country" id='country' onChange={(event) => changeHandler(event)}>
                            <option value=""></option>
                            {countryOptions.map(country => (
                                <option key={country.name}>
                                    {country.name}
                                </option>

                            ))}

                        </select>

                        <label htmlFor="description">Description</label>
                        <textarea id="description" name='description' onChange={(event) => changeHandler(event)} />

                        <label htmlFor="image">Image</label>
                        <input type="text" id="image" name='image' onChange={(event) => changeHandler(event)} />

                        <label>Ingredients</label>
                        {ingredients.map((ingredient, i) => (
                            <div key={i} >

                                <input
                                    type="text"
                                    placeholder="Qunatity"
                                    name="quantity"
                                    value={ingredient.quantity}
                                    onChange={(event) => handleIngredientChange(i, event)}
                                />

                                <input
                                    type="text"
                                    placeholder="Ingredient"
                                    name="ingredient"
                                    required
                                    value={ingredient.ingredient}
                                    onChange={(event) => handleIngredientChange(i, event)}
                                />

                                {clickAddIngredient && (<button className='removeingredient-btn' onClick={(event) => handleRemoveIngredient(event, i)}>x</button>)}

                            </div>
                        ))}

                        <button type="button" onClick={handleAddIngredient} >
                            Add Ingredient
                        </button>
                        <br />

                        <label htmlFor="instructions">Instructions</label>
                        <textarea id="instructions" name='instructions' required onChange={(event) => changeHandler(event)} />

                        <button type="submit">Post Recipe</button>
                    </form>

                </div>
            )}

            {postRecipe && (
                <div>
                    <p>Congratulations your recipe: {recipe.name} has been added successfully!</p>
                    <div>
                        <NavLink to={`/${id}`}>
                            <button>See your recipe</button>
                        </NavLink>

                    </div>
                </div>
            )}

        </div>
    );
};

export default Addrecipe;