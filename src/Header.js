import React from 'react';
import './style/Header.css';
import logo from './images/logo.png';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
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
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello, Holly
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>
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
                <div className="header__optionBasket">
                    <Link to="/checkout">
                        <ShoppingBasketIcon color="primary"/>
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </Link>
                </div>  
            </div>
        </div>
    )
}

export default Header;
