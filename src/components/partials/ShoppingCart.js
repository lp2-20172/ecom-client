import React from 'react';
//import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


import { removeFromCart } from '../../actions/ecomAction';
import { connect } from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


const ShoppingCart = ({ cart, removeFromCart }) => {

  return (
    <Paper>
      <Typography type="headline" component="h3">
          Shopping Cart
        </Typography>
      <Table fill>
        <tbody>
          {cart.map(product =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="text-right">${product.price}</td>
              <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}>
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>

              </Button></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={styles.footer}>


              Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
          </tr>
        </tfoot>
      </Table>

    </Paper>
  )


}

const mapStateToProps = state => {
  return {
    cart: state.ecom.cart
  }
}

const mapDispathToProps = dispatch => {
  return {
    removeFromCart: (product) => {

      console.log("REMOVE_FROM_CART " + product.name)
      dispatch(removeFromCart(product))


    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(ShoppingCart);
