import React from 'react';
import './style/Product.css';
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{ title }</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p><StarRateIcon color="primary" /></p>
                        ))
                    }
                </div>
            </div>
                <img src={image} className="product__img" alt="Gizmo 1" />
            <button>Add To Cart</button>
        </div>
    );
}

export default Product;
