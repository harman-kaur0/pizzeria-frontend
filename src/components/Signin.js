import React, {useState} from "react";
import { Button } from "react-bootstrap";

const Signin = ({handleClick}) => {
    const [login, setLogin] = useState({"email": "", "password": ""});
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    };

    return (
        <form className="login-form">
            <h1>Log In</h1>
            <div className="login-input-container">
                <div className='input-wrapper'>
                    <label for="login-email">Email address</label>
                    <input name="email" type="text" value={login.email} id="login-email" onChange={handleChange}/>
                </div>
                <div className='input-wrapper'>
                    <label for="login-password">Password</label>
                    <input name="password" type="password" value={login.password} id="login-password" onChange={handleChange}/>
                </div>
            </div>
            <div className="login-bottom-container">
                <Button type="submit" variant='dark'>Login</Button>
                <p>Not a member? <b role="button" onClick={handleClick}>Sign Up</b>.</p>
            </div>
        </form>
    )
};


export default Signin;