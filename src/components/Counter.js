import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
          n={ this.props.n }
          <br />
          <button xonClick="{this.props.increment(this.props.n)}"> + </button>
          <button xonClick="{this.props.decrement(this.props.n)}"> - </button>
      </div>
    );
  }
}

export default Counter;