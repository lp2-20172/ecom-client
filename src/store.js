import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import  thunk from 'redux-thunk'
import {responsiveStoreEnhancer} from 'redux-responsive'
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
        responsiveStoreEnhancer,
        applyMiddleware(thunk, routerMiddleware(browserHistory))
    )
)

export default store
