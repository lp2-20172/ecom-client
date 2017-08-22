import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
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

export default User;