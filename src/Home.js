import React from 'react';
import './style/Home.css';
import Product from './Product';
import b1 from './images/products/bishop_1.png';
import b2 from './images/products/bishop_2.png';
import b3 from './images/products/bishop_3.png';
import g1 from './images/products/gizmo_1.png';
import g2 from './images/products/gizmo_2.png';
import g3 from './images/products/gizmo_3.png';

function Home() {
    return (
        <div className="home">
            <div class="banner">
                <h1 className="page__title">Welcome</h1>
                <p className="signature">- Matterhorn Market</p>
            </div>
            <div className="home__container">
                <div className="home__row">
                    <Product
                        id="1"
                        title="Snug as a Pug (8x11)"
                        price={4.50}
                        image={g1}
                        rating={5}
                    />
                    <Product
                        id="2"
                        title="Boneless Bishop (8x11)"
                        price={4.50}
                        image={b1}
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="3"
                        title="Beautiful Eyes (5x7)"
                        price={3.50}
                        image={g2}
                        rating={5}
                    />
                    <Product
                        id="4"
                        title="Cocoon Cat (5x7)"
                        price={3.50}
                        image={b2}
                        rating={5}
                    />
                    <Product
                        id="5"
                        title="Eyes Wide Open (5x7)"
                        price={3.50}
                        image={g3}
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="6"
                        title="Dozy Bishop (8x11)"
                        price={4.50}
                        image={b3}
                        rating={5}
                    />
                </div>
            </div>           
        </div>
    )
}

export default Home;
