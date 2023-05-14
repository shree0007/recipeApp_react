import React from 'react';
import './Header.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function Header(props) {
    return (

        <header className="header">
            <div className='logo-and-heading'>
                <NavLink to="/"><img className='logo' src="./mylogo.png" alt="logo" /></NavLink>

                <h3>RECIPIE MASTER</h3>
            </div>

            <nav className="nav">


                <NavLink to="/">Home</NavLink>
                <NavLink to="/recipes">Recipes</NavLink>
                <NavLink to="/addrecipe">Add new recipe</NavLink>



            </nav>
        </header>
    );
}

export default Header;