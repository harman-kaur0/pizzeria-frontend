import React, {useState} from "react";

const Signin = () => {
    const [login, setlogin] = useState({"email": "", "password": ""});
    const [error, setError] = useState("");

    const handleChange = () => {

    };
    
    return (
        <form className="login-form">
            <div className="login-input-container">
                <div className='input-wrapper'>
                    <label for="login-email">Email address</label>
                    <input name="username" type="text" value={login.email} id="login-email" onChange={handleChange}/>
                </div>
                <div className='input-wrapper'>
                    <label for="login-password">Password</label>
                    <input name="username" type="password" value={login.password} id="login-password" onChange={handleChange}/>
                </div>
            </div>
            <div className="login-btn-container">
                <button type="submit">LOGIN</button>
            </div>
        </form>
    )
};


export default Signin;