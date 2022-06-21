import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

const Account = () => {

    const [click, setClick] = useState("Login");

    const handleClick = (e) => {
        setClick(e.target.innerText);
    };

    return (
        <div className='account-container'>
            <div className='account-inner'>
                <div className='account-img'>
                    <img src="https://img.freepik.com/free-photo/large-mixed-pizza-with-meat_140725-1274.jpg?w=2000"/>
                </div>
                <div className='account-right'>
                    <div className='account-btn-container'>
                        <button onClick={handleClick} className= {click === 'Sign Up' ? 'active' : null}>Sign Up</button>
                        <button onClick={handleClick} className= {click === 'Login' ? 'active' : null}>Login</button>
                    </div>
                    <div className="account-form-container">
                        {click === 'Sign Up' ? <Signup/> : <Signin/>}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Account;