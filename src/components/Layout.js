import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Holass"
    }
  }
  upTitle(e) {
    const title = e.target.value
    console.log("title:" + title)
    this.setState({
        title: title
      })
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <input type="text" onChange={this.upTitle.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
