import {combineReducers} from 'redux'

import counterReducer from './counterReducer'
import user from './userReducer'
import ecomReducers from './ecomReducer'

var reducers = combineReducers({
    counter: counterReducer,
    user:user,
    ecom: ecomReducers
});

export default reducers;
