import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
import { addToCart} from "../actionCreators";

const styles = {
    products: {
        display: 'flex',
        alignItems: 'stretch',
        flexWrap: 'wrap'
    },
    producto: {
        width: '220px',
        marginLeft: 10,
        marginRight: 10
    }
};

class ProductList extends Component {
    constructor() {
        super();
        this.addToCart = this.addToCart.bind(this);

        this.state = {
            products: [
                { id: 1, name: "Rogelio", price: 8000, image: "https://i.pinimg.com/236x/a4/69/7e/a4697e8c85508f7c4a8d14c134f22799--animal-pillows-cute-monsters.jpg" },
                { id: 2, name: "Cuadrombos", price: 4000, image: "https://i.pinimg.com/236x/87/c9/b2/87c9b221d1977b8f42ab488f632ae0a4.jpg" },
                { id: 3, name: "1,2,zzz", price: 6000, image: "https://i.pinimg.com/236x/46/ce/c0/46cec0a79bc7bcb5b538d2c11f267aca--large-cushions-sewing-pillows.jpg" },
                { id: 3, name: "Colmillo de león", price: 6000, image: "https://i.pinimg.com/236x/ce/5e/57/ce5e57d1373e90045569a4dde26e4d85--decor-pillows-throw-pillows.jpg" },
            ]
        }
    }

    render() {
        return (
            <div style={styles.products}>
                {this.state.products.map(producto =>
                    <div className="thumbnail" style={styles.producto} key={producto.id}>
                        <img src={producto.image} alt={producto.name} />
                        <div className="caption">
                            <h4>{producto.name}</h4>
                            <p>
                                <Button bsStyle="primary" onClick={() => this.addToCart(producto)} role="button" disabled={producto.inventory <= 0}>₡{producto.price} <Glyphicon glyph="shopping-cart" /></Button>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    addToCart(producto) {
store.dispatch(addToCart(producto));
    }
}

export default ProductList;