import React, { Component } from 'react';
import './style/Login.css';
import logo from './images/logo.png';
import { Link } from "react-router-dom";

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <Link to="/">
                    <img src={logo} className="login__logo" alt="logo" />
                </Link>
                <div className='login__container'>
                <h2>Sign-in</h2>

                    <form>
                        <h5>E-mail</h5>
                        <input type='text'/>

                        <h5>Password</h5>
                        <input type='password' />

                        <button type='submit' className='login__signInButton'>Sign In</button>
                    </form>

                    <p>
                        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button className='login__registerButton'>Create your Amazon Account</button>
                </div>
            </div>
        )
    }
}

export default Login;