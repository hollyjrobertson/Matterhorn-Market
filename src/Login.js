import { useState } from 'react';
import './style/Login.css';
import logo from './images/logo.png';
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //Login process
    }

    const register = e => {
        e.preventDefault();
        //Register process
    }

    return (
        <div className="login">
            <Link to="/">
                <img src={logo} className="login__logo" alt="logo" />
            </Link>
            <div className='login__container'>
            <h2>Sign-in</h2>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        type='submit'
                        onClick={signIn}
                        className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Matterhorn Market's Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button
                    onClick={register}
                    className='login__registerButton'>Create your Matterhorn Account</button>
            </div>
        </div>
    )
}


export default Login;