import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import  thunk from 'redux-thunk'
import {responsiveStoreEnhancer} from 'redux-responsive'

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
        responsiveStoreEnhancer,
        applyMiddleware(thunk)
    )
)

export default store
