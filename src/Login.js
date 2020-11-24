import React, { Component } from 'react';
import './style/Login.css';
import logo from './images/logo.png';

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <img src={logo} className="login__logo" alt="logo"/>
            </div>
        )
    }
}

export default Login;