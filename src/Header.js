import React from 'react';
import './style/Header.css';
import logo from './images/logo.png';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img src={logo} className="header__logo" alt="logo" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div
                        onClick={handleAuthentication}
                        className="header__option">
                        <span className="header__optionLineOne"> 
                            {user ? 'Welcome Back ' + user.email : 'Hello Guest'}</span>
                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Peak
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon color="primary"/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header;
