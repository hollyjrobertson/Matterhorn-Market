import React from 'react';
import './style/Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__banner"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="Checkout Banner" /> 
                <div>
                    <h2 className="checkout_title"> Your Shopping Basket</h2>
                </div>
            </div>
            <div className="checkout__right">
                <div>
                    <h2>The subtotal will go here</h2>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
