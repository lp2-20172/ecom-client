import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

class Layout extends Component {
  upTitle(e){
    const title = e.target.value
    console.log("title:"+title)
  }
  render() {
    return (
      <div>
        <Header title ="Hola"/>
        <input type="text" onChange ={this.upTitle.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
