import React, {Component} from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { removeFromCart} from "../actionCreators";
import { connect} from 'react-redux';

const styles = {
    footer: {
        fontWeight: 'bold'
    }
};

class ShoppingCart extends Component{
    render() {
        return (
            <Panel header="Lista de compras">
                <Table fill>
                    <tbody>
                    {this.props.cart.map(producto =>
                        <tr key={producto.id}>
                            <td>{producto.name}</td>
                            <td className="text-right">₡ {producto.price}</td>
                            <td className="text-right"><Button bsSize="xsmall" bsStyle="danger"
                                                               onClick={() => this.props.removeFromCart(producto)}><Glyphicon
                                glyph="trash"/></Button></td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="4" style={styles.footer}>
                            Total: ₡ {this.props.cart.reduce((sum, producto) => sum + producto.price, 0)}
                        </td>
                    </tr>
                    </tfoot>
                </Table>

            </Panel>
        );
    };
}
const mapStateToProps = state => {
    return{
       cart:state.cart
    };
};
const mapDispatchToProps =dispatch => {
    return {
        removeFromCart(producto){
           dispatch(removeFromCart(producto));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps) (ShoppingCart);