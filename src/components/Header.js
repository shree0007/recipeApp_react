import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/mylogo.jpg'
import './Header.css';

function Header(props) {
    return (

        <header className="header">
            <div className='logo-and-heading'>
                <NavLink to="/"><img className='logo' src={logo} alt="logo" /></NavLink>

                <h3>RECIPE MASTER</h3>
            </div>

            <nav className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/recipes">Recipes</NavLink>
                <NavLink to="/addrecipe">Add new recipe</NavLink>
                <NavLink to="/about">About us</NavLink>
            </nav>

        </header>
    );
}

export default Header;