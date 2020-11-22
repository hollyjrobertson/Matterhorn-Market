import React from 'react';
import './style/Home.css';
import Product from './Product';
import b1 from './images/products/bishop_1.jpg';
import b2 from './images/products/bishop_2.jpg';
import b3 from './images/products/bishop_3.jpg';
import g1 from './images/products/gizmo_1.jpg';
import g2 from './images/products/gizmo_2.jpg';
import g3 from './images/products/gizmo_3.jpg';

function Home() {
    return (
        <div className="home">
            <h1 className="home__banner"> Welcome to the Matterhorn Market </h1>
            <div className="home__container">
                <div className="home__row">
                    <Product
                        title="Snug as a Pug (8x11)"
                        price="1.5"
                        image={g1}
                        rating={5}
                    />
                    <Product
                        title="Boneless Bishop (8x11)"
                        price="1"
                        image={b1}
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        title="Beautiful Eyes (5x7)"
                        price=".75"
                        image={g2}
                        rating={5}
                    />
                    <Product
                        title="Cocoon Cat (5.7)"
                        price="1"
                        image={b2}
                        rating={5}
                    />
                    <Product
                        title="Eyes Wide Open (5x7)"
                        price="1.25"
                        image={g3}
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        title="Dozy Bishop (8x11)"
                        price="1"
                        image={b3}
                        rating={5}
                    />
                </div>
            </div>           
        </div>
    )
}

export default Home;
