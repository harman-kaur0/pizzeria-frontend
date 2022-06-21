import React, {useState} from "react";

const Signup = () => {
    const[signup, setSignup] = useState({"name": "", "email": "", "password": "", "confirmPassword": ""});

    const handleChange = () => {

    }

    return (
        <form className="signup-form">
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
            <div className="signup-btn-container">
                <button type="submit">SIGN UP</button>
            </div>
        </form>
    )
};

export default Signup;