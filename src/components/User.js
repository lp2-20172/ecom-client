import React, { Component } from 'react';
import { getList } from '../actions/userAction'
import { connect } from 'react-redux'
class User extends Component {
    componentWillMount() {
        this.props.listausers("")
    }

    change(e) {
        const q = e.target.value
        console.log("q:" + q)
        this.props.listausers(q)
    }

    render() {
        return (
            <div>
                q={this.props.q}
                <br />
                <h2>User List</h2>
                <input type="text" onChange={this.change.bind(this)} />
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map(d =>
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
        listausers: (q ) => { dispatch(getList(q)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);
