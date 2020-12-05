import React from 'react';
import './style/Product.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket  }, dispatch] = useStateValue();
    
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarRateIcon color="primary" />
                    ))}
                </div>
            </div>
            <div class="frame">
                <img src={image} alt="Gizmo 1" />
            </div>

            <button onClick={addToBasket}>Add To Cart</button>
        </div>
    );
}

export default Product;
