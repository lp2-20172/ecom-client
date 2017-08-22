import React, { Component } from 'react';
import { getList } from '../actions/userAction'
import { connect } from 'react-redux'
class User extends Component {
    componentWillMount (){
        this.props.listausers()
    }

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
                                <td>{d.name}</td>
                                <td>{d.email}</td>
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
        listausers: () => { dispatch(getList()) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);
