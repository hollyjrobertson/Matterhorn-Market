import React from 'react';
import './Product.css';
import StarRateIcon from '@material-ui/icons/StarRate';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Gizmo pictures</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>1</strong>
                </p>
                <div className="product__rating">
                    <p><StarRateIcon /></p>
                </div>
            </div>
            
        </div>
    );
}

export default Product;
