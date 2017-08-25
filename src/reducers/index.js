import {combineReducers} from 'redux'
import {responsiveStateReducer} from 'redux-responsive'
import {responsiveDrawer} from 'material-ui-responsive-drawer';

import counterReducer from './counterReducer'
import user from './userReducer'
import ecomReducers from './ecomReducer'

var reducers = combineReducers({
    counter: counterReducer,
    user:user,
    ecom: ecomReducers,
    browser: responsiveStateReducer,
    responsiveDrawer: responsiveDrawer,
});

export default reducers;
