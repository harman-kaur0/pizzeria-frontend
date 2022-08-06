import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import logo from '../icons8-pizza-64.png';

const Account = () => {

    const [click, setClick] = useState("Login");

    const handleClick = (e) => {
        console.log(e.target.innerText)
        setClick(e.target.innerText);
    };

    return (
        <div className='account-container'>
            <div className='account-inner'>
                <div className='account-left'>
                    <div className="account-form-container">
                        {
                            click === 'Sign Up' ? 
                            <Signup handleClick={handleClick}/> :
                            <Signin handleClick={handleClick}/>
                        }
                    </div>
                </div>
                <div className='account-right'>
                    <img src={logo}/>
                    <p>Sizzling.</p>
                    <p>Delicious.</p>
                    <p>Cravings.</p>
                </div>
            </div>
        </div>
    )
};

export default Account;