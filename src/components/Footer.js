import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';



function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2023 Shree's Recipe Website. All rights reserved.</p>
            <div className='icons'>
                <Link to="https://www.facebook.com/mrfoodienepal"><FaFacebook size={24} className='icon' /></Link>
                <Link to='https://twitter.com/fdbloggers?lang=en'><FaTwitter size={24} className='icon' /></Link>
                <Link to='https://www.instagram.com/foodgasm_helsinki/'><FaInstagram size={24} className='icon' /></Link>
            </div>
        </footer>
    );
}

export default Footer;