import { INCREMENT, DECREMENT } from '../actions/counterAction'
const initialState ={
    n:0,
    x:5
}
/* ES5 */
function counterx(state=initialState, action) {
}
var counterx = function (state=initialState, action) {
}
/* ES6 */
const counter = (state=initialState, action) => {
    switch(action.type) {
        case INCREMENT: return {
            ...state,
            n: action.n+1,
            x: action.x
        }
        case DECREMENT: return {
            ...state,
            n: action.n-1
        }
        default: return state
    }
    return state
}

export default counter