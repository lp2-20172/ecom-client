import React, { Component } from 'react';
import {increment, decrement } from '../actions/counterAction'
import {connect} from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
          n={ this.props.n }
          <br />
          <button onClick={()=>this.props.increment(this.props.n)}> + </button>
          <button onClick={()=>this.props.decrement(this.props.n)}> - </button>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    return {
        n:store.counter.n
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: (n)=>{ dispatch (increment (n)) },
        decrement: (n)=>{ dispatch (decrement (n)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);