import React, { Component } from 'react'
import { Link } from 'react-router'


class MainLayout extends Component {
    render() {
        return (
            <div className="layout">
                <div className="menu">
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/layouts" >layouts List</Link></li>
                        <li><Link to="/counters" >Counter</Link></li>
                        <li><Link to="/users" >Users</Link></li>
                    </ul>

                </div>
                <div className="content">
                    Soy el main body
                {this.props.children}
                </div>

            </div>
        );
    }
}

export default MainLayout;