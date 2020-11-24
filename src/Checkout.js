import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './style/Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch ]= useStateValue();
    return (
        <div className="checkout">
            <div class="banner">
                <h1 className="page__title">Thank You</h1>
                <p className="signature">- Matterhorn Market</p>
            </div>
            <div className="checkout__container">
                <div className="column">
                    <h2> Your Shopping Basket</h2>
                    {
                        basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
                <div className="column">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout;
