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
                <a href='/menu'>Menu</a>
                <a href='/'>Home</a>
                <a href='/account'>Sign in</a>
                <a href="/cart">Cart</a>
            </div>
        </nav>
    );
};

export default Navigation;