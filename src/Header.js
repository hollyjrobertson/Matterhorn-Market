import React from 'react';
import './style/Header.css';
import logo from './images/logo.png';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <div className="header">
            <img src={logo} className="header__logo" alt="logo" />
    
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
                    <ShoppingBasketIcon color="primary"/>
                    <span className="header__optionLineTwo header__basketCount">0</span>
            </div>
            </div>
        </div>
    )
}

export default Header;
