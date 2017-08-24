import React from 'react';
import { Component } from 'react'
//import { Button, Glyphicon } from 'react-bootstrap';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';

import { addToCart, loadProducts } from '../../actions/ecomAction';
import { connect } from 'react-redux';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

class ProductList extends Component {

  componentWillMount() {
    this.props.loadProducts()
  }

  render() {
    return (
      <div style={styles.products}>
        {this.props.products.map(product =>
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => this.props.addToCart(product)} role="button" 
                  disabled={product.inventory <= 0}>${product.price}

                <IconButton color="primary" aria-label="Add to shopping cart">
                   
                    <AddShoppingCartIcon />
                  </IconButton>

                </Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    products: state.ecom.products
  };
};

const mapDispatchToProps = dispatch => {
  return {

    addToCart: (product) => {

      console.log("ADD_TO_CART " + product.name)
      dispatch(addToCart(product));
    },
    loadProducts: () => {

      dispatch(loadProducts());
    }


  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

