import React, { Component } from 'react';
//import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ProductList from './partials/ProductList';
import ShoppingCart from './partials/ShoppingCart';
import Grid from 'material-ui/Grid';



class ECom extends Component {
  render() {
    return (
      <div>

        <Grid container >
            <Grid item xs={8}>
              <ProductList />
            </Grid>
            <Grid item xs={4}>
              <ShoppingCart />
            </Grid>
          </Grid>
      </div>
    );
  }
}

export default ECom;
