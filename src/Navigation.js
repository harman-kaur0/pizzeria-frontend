import React, {useState} from 'react';
import logo from './icons8-pizza-64.png';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="navbar-container justify-content-end">
            <img src={logo}/>
            <div class="link-container">
                <a href='/menu'>Menu</a>
                <a href='/'>Home</a>
                <a href='/account'>Sign in</a>
                <a href="/cart">Cart</a>
            </div>
        </Navbar>
    );
};

export default Navigation;