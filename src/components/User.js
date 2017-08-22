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
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((d) =>
                            <tr>
                                <td>d.name</td>
                                <td>d.email</td>
                            </tr>
                        )}
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
        list: store.user.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: (n) => { dispatch(increment(n)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);
