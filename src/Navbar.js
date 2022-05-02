import React, {useState} from 'react';
import logo from './icons8-pizza-64.png';

const Navbar = () => {
    return (
        <div class="navbar-container">
            <img src={logo}/>
            <div class="link-container">
                <a>Order online</a>
                <a>Menu</a>
                <a>Home</a>
                <a>Sign in</a>
                <a>Cart</a>
            </div>
        </div>
    )
};

export default Navbar;