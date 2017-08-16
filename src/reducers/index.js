import {combineReducers} from 'redux'

import counterReducer from './counterReducer'
var reducers = combineReducers({
    counterReducer: counterReducer
});

export default reducers;