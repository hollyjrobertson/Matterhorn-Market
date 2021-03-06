import React from 'react';
import './style/CheckoutProduct.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from './StateProvider';
import { orange } from '@material-ui/core/colors';

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const formatPrice = (price) => {
        return price.toFixed(2);
    }
    const removeFromBasket = () => {
        //dispatch the item into the data layer
        //remove from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="Checkout Product" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{formatPrice(price)}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><StarRateIcon style={{ color: orange[500], fontSize: 30 }} /></p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct;