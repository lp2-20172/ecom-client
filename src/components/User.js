import React, { Component } from 'react';
import { increment } from '../actions/counterAction'
import { connect } from 'react-redux'
class User extends Component {
    render() {
        return (
            <div>
                n={this.props.n}
                <br />
                <h2>User List</h2>
                <table>
                    <thead>
                        <th>Nombre</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        <td>nombre</td>
                        <td>email</td>
                    </tbody>

                    <tfoot>

                    </tfoot>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        n: store.counter.n
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: (n) => { dispatch(increment(n)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);
