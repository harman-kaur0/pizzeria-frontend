import React, {useState, useEffect} from 'react';
import logo from './icons8-pizza-64.png';
import{ debounce } from './helpers/debounce';

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const Navigation = () => {

    const [windowSize, setWindowSize] = useState(width);

    const handleResize = debounce(() => {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        setWindowSize(screenWidth);
    }, 15);

    useEffect (() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowSize]);

    return (
        <nav className="navbar-container">
            <img src={logo}/>
            <div className="link-container">
                <a href='/menu'>MENU</a>
                <a href='/'>HOME</a>
                <a href='/account'>SIGN IN</a>
                <a href="/cart">CART</a>
            </div>
        </nav>
    );
};

export default Navigation;