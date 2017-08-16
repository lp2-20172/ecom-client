
const initialState ={
    n:0
}
const counter = (state=initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            ...state,
            n: action.n+1
        }
    }
    
    return state;
}

export default counter