import React from 'react';
import './style/Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div class="checkout__banner"></div>
            <div className="checkout__container">
                <div className="column">
                    <h2> Your Shopping Basket</h2>
                </div>
                <div className="column">
                    <h2>The subtotal will go here</h2>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
