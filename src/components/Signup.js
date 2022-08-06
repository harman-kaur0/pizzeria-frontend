import React, {useState} from "react";
import { Button } from "react-bootstrap";

const Signup = ({handleClick}) => {
    const[signup, setSignup] = useState({"name": "", "email": "", "password": "", "confirmPassword": ""});

    const handleChange = () => {

    }

    return (
        <form className="signup-form">
            <h1>Sign Up</h1>
            <div className="signup-input-container">
                <div className='input-wrapper'>
                    <label for="signup-name">Name</label>
                    <input name="name" type="text" value={signup.name} id="signup-name" onChange={handleChange}/>
                </div>
                <div className='input-wrapper'>
                    <label for="signup-email">Email address</label>
                    <input name="email" type="text" value={signup.email} id="signup-email" onChange={handleChange}/>
                </div>
                <div className='input-wrapper'>
                    <label for="signup-password">Password</label>
                    <input name="password" type="password" value={signup.password} id="signup-password" onChange={handleChange}/>
                </div>
                <div className='input-wrapper'>
                    <label for="signup-confirm-password">Password</label>
                    <input name="password" type="password" value={signup.confirmPassword} id="signup-confirm-password" onChange={handleChange}/>
                </div>
            </div>
            <div className="signup-bottom-container">
                <Button type="submit" variant='dark'>Sign Up</Button>
                <p>Already a member? <b role="button" onClick={handleClick}>Login</b>.</p>
            </div>
        </form>
    )
};

export default Signup;