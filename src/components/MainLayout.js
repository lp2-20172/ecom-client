import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux';

import {
    ResponsiveDrawer,
    ResponsiveAppBar,
    BodyContainer,
    setDrawerOpen,
    toggleDrawerOpen
} from 'material-ui-responsive-drawer'
import {SelectableMenuList} from './utils/SelectableMenuList';

import {  push } from 'react-router-redux';

import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider';
import Close from 'material-ui-icons/Close';



const styles = {
    drawer_container: {
        height: '100%',
        width: 250,
    }
}


class MainLayout extends Component {

    render() {
        const {
            toggleDrawerOpen,
            responsiveDrawer
        } = this.props
        const index=this.props.location?this.props.location.pathname:'/';

        const menuItems=[
            
                  {
                    subheader: 'Settings',
                  },
                  {
                    value:'/profile_photo',
                    visible: true,
                    primaryText: 'Profile photo',
                    secondaryText: 'Change your Google+ profile photo',
                  },
                  {
                    value:'/show_status',
                    visible: false,
                    primaryText: 'Show your status',
                    secondaryText: 'Your status is visible to everyone you use with',
                  },
            
                ];


        return (
            <div>
                    <ResponsiveDrawer >
                        <div style={styles.drawer_container}>
                            <Toolbar >
                                {responsiveDrawer.open &&
                                    <IconButton onTouchTap={toggleDrawerOpen}>
                                        <Close />
                                    </IconButton>
                                }

                                <Typography type="headline" component="h2">
                                    Material UI
                                </Typography>
                                <Divider absolute />
                            </Toolbar>

                            <ul>
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to="/layouts" >layouts List</Link></li>
                                <li><Link to="/counters" >Counter</Link></li>
                                <li><Link to="/users" >Users</Link></li>
                                <li><Link to="/ecoms">Ecom Carrito</Link></li>
                            </ul>
                            <SelectableMenuList
                items={menuItems}
                onIndexChange={this.handleChange}
                index={index}
              />


                        </div>



                    </ResponsiveDrawer>
                    <BodyContainer >
                        <ResponsiveAppBar >

                            <Typography type="headline" component="h2">
                                Title
                             </Typography>

                        </ResponsiveAppBar>

                        <div style={{ margin: 20, marginTop: 70 }}>



                            {this.props.children}
                        </div>
                    </BodyContainer>
            </div>
        );
    }
}


MainLayout.propTypes = {
    toggleDrawerOpen: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    const { responsiveDrawer } = state;
    return {
        responsiveDrawer
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        toggleDrawerOpen: () => {
            dispatch(toggleDrawerOpen());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainLayout);